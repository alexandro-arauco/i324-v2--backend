import { NoticeRepository } from "../repositories/notice.repository";

export const listNotices = async (page: number, itemsPerPage: number) => {
  return await NoticeRepository.list(page, itemsPerPage);
};
