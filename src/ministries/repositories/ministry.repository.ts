import { Ministry } from "../../ministries/entities/ministry.entity";
import { db } from "../../shared/database/connection";
import { ministries } from "../../shared/database/schema";

export const MinistryRepository = {
  create: async (props: Ministry) => {
    try {
      const [created] = await db
        .insert(ministries)
        .values({ ...props })
        .returning();

      return created;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return null;
    }
  },
  list: async (page: number, itemsPerPage: number) => {
    const total = (await db.select().from(ministries)).length;

    const offset = (page - 1) * itemsPerPage;

    const data = await db.query.ministries.findMany({
      limit: itemsPerPage,
      offset,
      with: {
        ministriesToLeaders: {
          with: {
            leader: true,
          },
        },
      },
    });

    return {
      items: data,
      total,
    };
  },
};
