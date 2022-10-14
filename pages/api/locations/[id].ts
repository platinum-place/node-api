import type { NextApiRequest, NextApiResponse } from "next";
import { validateHeader } from "../../../services/headersService";
import { getCase, getServiceCase } from "../../../services/caseService";
import { getSystrackLocationById } from "../../../services/systrackService";

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
    res.status(400).json({ code: 400, message: "Usuario incorrecto" });
  }

  const data = await getCase(id);

  if (data == null) {
    res.status(502).json({ code: 502, message: "Caso no encontrado" });
  }

  if (
    data.status == "Medio servicio" ||
    data.status == "Cancelado" ||
    data.status == "Contacto" ||
    data.status == "Cerrado"
  ) {
    res.status(501).json({ code: 501, message: "Caso concluido" });
  }

  const service = await getServiceCase(data.location_id);

  var location = { latitude: 0, longitude: 0 };
  var message = "Caso en progreso";

  switch (service.platform) {
    case "Systrack":
      location = await getSystrackLocationById(service.token);
      var message = "Servicio en camino";
      break;

    case "Navixy":
      //location = await getSystrackLocationsById(service.token);
      break;
  }

  res.status(200).json({ code: 200, id: id, message: message, data: location });
}
