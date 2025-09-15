import { leaders } from "../../shared/database/schema";
import { Leader } from "../../leaders/entities/leader.entity";
import { db } from "../../shared/database/connection";

export const LeaderRepository = {
  create: async (props: Leader) => {
    try {
      const [created] = await db
        .insert(leaders)
        .values({ ...props })
        .returning();

      return created;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return null;
    }
  },
  list: async (page: number, itemsPerPage: number) => {
    const total = (await db.select().from(leaders)).length;

    const offset = (page - 1) * itemsPerPage;
    /* const data = await db
      .select()
      .from(leaders)
      .limit(itemsPerPage)
      .offset(offset); */

    const data = await db.query.leaders.findMany({
      limit: itemsPerPage,
      offset,
      with: {
        ministriesToLeaders: {
          with: {
            ministry: true,
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
