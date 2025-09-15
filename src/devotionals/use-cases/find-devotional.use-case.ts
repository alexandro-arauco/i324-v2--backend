import { z } from "zod";
import { DevotionalRepository } from "../repositories/devotional.repository";

const findDevotionalSchema = z.object({
  created_at: z.date(),
});

type FindDevotionalType = z.infer<typeof findDevotionalSchema>;

export const findDevotionalByDate = async (input: FindDevotionalType) => {
  const parsed = findDevotionalSchema.parse(input);
  return DevotionalRepository.findByDate(parsed);
};
