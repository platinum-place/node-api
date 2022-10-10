import type { NextApiRequest, NextApiResponse } from "next";
import { getZohoCase } from "../../../services/caseService";
import { validateHeader } from "../../../services/headersService";
import { zohoGet } from "../../../services/zohoService";

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
    res.status(501).json({ code: 501, message: "Caso concluido" });
  }

  res.status(200).json(data);
}
