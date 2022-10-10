import type { NextApiRequest, NextApiResponse } from "next";
import { getSystrackLocations } from "../../../services/systrackService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  let data = await getSystrackLocations();

  res.status(200).json(data);
}
