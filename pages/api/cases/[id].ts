import { NextApiRequest, NextApiResponse } from "next";
import { getCase } from "../../../services/zohoService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  var actualCase = await getCase(req.query.id);
  res.status(200).json(actualCase);
}
