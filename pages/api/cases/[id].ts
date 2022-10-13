import type { NextApiRequest, NextApiResponse } from "next";
import { getCase } from "../../../services/caseService";
import { validateHeader } from "../../../services/headersService";

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

  res.status(200).json(data);
}
