import { z } from "zod";
import { DevotionalRepository } from "../repositories/devotional.repository";

const createDevotionalSchema = z.object({
  title: z.string().nonoptional(),
  content: z.string().nonoptional(),
  imageUrl: z.string().optional(),
  created_at: z.date().optional(),
});

type CreateDevotionalType = z.infer<typeof createDevotionalSchema>;

export const createDevotional = async (input: CreateDevotionalType) => {
  const parsed = createDevotionalSchema.parse(input);
  return DevotionalRepository.create({
    ...parsed,
  });
};
