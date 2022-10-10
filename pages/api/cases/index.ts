import type { NextApiRequest, NextApiResponse } from "next";
import { zohoCreate } from "../../../services/zohoService";
import { validateHeader } from "../../../services/headersService";
import { setCaseToZoho } from "../../../services/caseService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body, headers } = req;

  if (method !== "POST") {
    res.status(404).end();
  }

  if (!validateHeader(headers.user, headers.pass)) {
    res.status(500).json({ code: 500, message: "Usuario incorrecto" });
  }

  let zoho = await zohoCreate("Cases", setCaseToZoho(body));

  let id = zoho.data[0].details.id;

  res.status(200).json({ status: 200, id: id, data: body });
}
