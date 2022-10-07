import { NextApiRequest, NextApiResponse } from "next";
import { getLocations } from "../../services/systrackService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  var locations = await getLocations();

  res.status(200).json(locations);
}
