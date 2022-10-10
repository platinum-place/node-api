import type { NextApiRequest, NextApiResponse } from "next";
import { caseModel } from "../../../models/caseModel";
import { zohoGet } from "../../../services/zohoService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  let model = new caseModel();

  let zoho = await zohoGet("Cases", id);

  let data = model.getData(zoho.data[0]);

  if (data.status !== "Despachado") {
    res.status(404).end();
  }

  res.status(200).json(data);
}
