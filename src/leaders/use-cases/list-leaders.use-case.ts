import { LeaderRepository } from "../../leaders/repositories/leader.repository";

export const listLeaders = async (page: number, itemsPerPage: number) => {
  return await LeaderRepository.list(page, itemsPerPage);
};
