import { MinistryRepository } from "../../ministries/repositories/ministry.repository";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});

type MinistryType = z.infer<typeof schema>;

export const createMinistry = async (input: MinistryType) => {
  const parsed = schema.parse(input);

  return MinistryRepository.create({
    ...parsed,
    icon: parsed.icon ?? "",
  });
};
