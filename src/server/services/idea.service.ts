import { Idea } from "../../types/Idea";

export const createIdea = (idea: Idea) => prisma?.idea.create({ data: idea });
