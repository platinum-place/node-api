import { NextApiRequest, NextApiResponse } from "next";
import { caseModel, setData } from "../../../models/caseModel";
import { createCase } from "../../../services/zohoService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(404).end();
  }

  var data = setData(req.body);
  caseModel.data = [data];
  var newCase = await createCase(caseModel);

  res.status(200).json(newCase);
}
