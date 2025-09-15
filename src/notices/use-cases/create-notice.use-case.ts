import { z } from "zod";
import { NoticeRepository } from "../repositories/notice.repository";

const schema = z.object({
  title: z.string(),
  content: z.string(),
  imageUrl: z.string().optional(),
});

type NoticeType = z.infer<typeof schema>;

export const createNotice = async (input: NoticeType) => {
  const parsed = schema.parse(input);

  return NoticeRepository.create({
    ...parsed,
    imageUrl: parsed.imageUrl ?? "",
  });
};
