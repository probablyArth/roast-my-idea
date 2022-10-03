import { NextApiRequest, NextApiResponse } from "next";
import { createIdea } from "../services/idea.service";
import { Idea } from "../../types/Idea";
export const postIdea = async (
  req: NextApiRequest,
  res: NextApiResponse,
  userId: string
) => {
  const idea = req.body.idea as Idea;
  await createIdea({ ...idea, userId: userId });
  return res.status(201).send({ success: true });
};
