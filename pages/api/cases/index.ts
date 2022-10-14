import type { NextApiRequest, NextApiResponse } from "next";
import { validateHeader } from "../../../services/headersService";
import { createCase } from "../../../services/caseService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body, headers } = req;

  if (method !== "POST") {
    res.status(404).end();
  }

  if (!validateHeader(headers.user, headers.pass)) {
    res.status(400).json({ code: 400, message: "Usuario incorrecto" });
  }

  const zoho = await createCase(body);

  res
    .status(200)
    .json({
      code: 200,
      message: "Caso creado con exito",
      id: zoho.id,
      data: body,
    });
}
