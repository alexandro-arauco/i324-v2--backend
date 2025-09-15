import { LeaderRepository } from "../../leaders/repositories/leader.repository";
import { z } from "zod";
const schema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  email: z.string().optional(),
  gender: z.string(),
});

type LeaderType = z.infer<typeof schema>;

export const createLeader = async (input: LeaderType) => {
  const parsed = schema.parse(input);

  return LeaderRepository.create({
    ...parsed,
    email: parsed.email ?? "",
  });
};
