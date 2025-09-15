import { EventRepository } from "../../events/repositories/event.repository";
import { z } from "zod";
const schema = z.object({
  title: z.string(),
  description: z.string(),
  address: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  startTime: z.string(),
  endTime: z.string(),
  imageUrl: z.string().optional(),
});

type EventType = z.infer<typeof schema>;

export const createEvent = async (input: EventType) => {
  const parsed = schema.parse(input);

  return EventRepository.create({
    ...parsed,
    imageUrl: parsed.imageUrl ?? "",
  });
};
