import type { NextApiRequest, NextApiResponse } from "next";
import { getSystrackLocationsById } from "../../../services/systrackService";
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
    res.status(500).json({ code: 500, message: "Usuario incorrecto" });
  }

  let data = await getSystrackLocationsById(id);

  res.status(200).json(data);
}
