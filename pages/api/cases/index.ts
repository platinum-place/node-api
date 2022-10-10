import type { NextApiRequest, NextApiResponse } from "next";
import { caseModel } from "../../../models/caseModel";
import { zohoCreate } from "../../../services/zohoService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method !== "POST") {
    res.status(404).end();
  }

  let model = new caseModel();

  let zoho = await zohoCreate("Cases", model.setData(body));

  let id = zoho.data[0].details.id;

  res.status(200).json({ status: 200, id: id, data: body });
}
