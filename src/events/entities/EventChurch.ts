export interface EventChurch {
  id?: number;
  title: string;
  description: string;
  address: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  imageUrl?: string;
}
