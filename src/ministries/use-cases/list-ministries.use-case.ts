import { MinistryRepository } from "../../ministries/repositories/ministry.repository";

export const listMinistries = async (page: number, itemsPerPage: number) => {
  return await MinistryRepository.list(page, itemsPerPage);
};
