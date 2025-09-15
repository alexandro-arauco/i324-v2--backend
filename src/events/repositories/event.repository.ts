import { db } from "../../shared/database/connection";
import { EventChurch } from "../../events/entities/EventChurch";
import { events } from "../../shared/database/schema";

export const EventRepository = {
  create: async (props: EventChurch) => {
    const [created] = await db
      .insert(events)
      .values({
        ...props,
        startDate:
          props.startDate instanceof Date
            ? props.startDate.toISOString()
            : props.startDate,
        endDate:
          props.endDate instanceof Date
            ? props.endDate.toISOString()
            : props.endDate,
      })
      .returning();

    return created;
  },
  list: async (page: number, itemsPerPage: number) => {
    const total = (await db.select().from(events)).length;
    const offset = (page - 1) * itemsPerPage;

    const data = await db.query.events.findMany({
      limit: itemsPerPage,
      offset,
    });

    return {
      items: data,
      total,
    };
  },
};
