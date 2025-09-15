import { EventRepository } from "../../events/repositories/event.repository";

export const listEvents = async (page: number, itemsPerPage: number) => {
  return await EventRepository.list(page, itemsPerPage);
};
