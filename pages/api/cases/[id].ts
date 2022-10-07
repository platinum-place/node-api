import { NextApiRequest, NextApiResponse } from "next";
import { getCase } from "../../../services/zohoService";
import systrackService from "../../../services/systrackService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  var actualCase = await getCase(req.query.id);
  var location = await systrackService(actualCase.data[0].Suplidor);
  res.status(200).json({ actualCase, location });
}
