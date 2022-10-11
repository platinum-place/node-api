import type { NextApiRequest, NextApiResponse } from "next";
import { getSystrackLocationsById } from "../../../services/systrackService";
import { validateHeader } from "../../../services/headersService";
import { zohoGet } from "../../../services/zohoService";
import { getZohoCase } from "../../../services/caseService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
    headers,
  } = req;

  if (!validateHeader(headers.user, headers.pass)) {
    res.status(500).json({ code: 500, message: "Usuario incorrecto" });
  }

  let zoho = await zohoGet("Cases", id);

  let data = getZohoCase(zoho.data[0]);

  if (data.status !== "Despachado") {
    res.status(501).json({ code: 501, message: "Caso en progreso" });
  }

  let zohoService = await zohoGet("Products", data.location_id);

  let platform = zohoService.data[0].Plataforma_API;
  let api_key = zohoService.data[0].Clave_API;
  var location = [];

  switch (platform) {
    case "Systrack":
      location = await getSystrackLocationsById(api_key);
      break;

    case "Navixy":
      location = await getSystrackLocationsById(api_key);
      break;
  }

  res.status(200).json({ id: id, data: location });
}
