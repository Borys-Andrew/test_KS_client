export interface Train {
  _id: string;
  number: number;
  from: string;
  to: string;
  days: string[];
  departure: string;
  arrival: string;
}

export type TrainData = Omit<Train, '_id'>;
