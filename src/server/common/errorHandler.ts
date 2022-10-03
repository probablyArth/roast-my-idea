import { NextApiRequest, NextApiResponse } from "next";
import logger from "../utils/winston";
import { getServerAuthSession } from "./get-server-auth-session";

const errorHandler = async (
  handler: (
    req: NextApiRequest,
    res: NextApiResponse,
    userId: string
  ) => unknown,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const session = await getServerAuthSession({ req, res });
    if (session === null) {
      return res.status(403).send({ success: false });
    }
    await handler(req, res, session.user?.id as string);
  } catch (error) {
    logger.error(error);
    res.status(500).send({ success: false });
  }
};

export default errorHandler;
