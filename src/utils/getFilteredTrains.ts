import { Train } from '../types';

export const getFilteredTrains = (trains: Train[], query: string): Train[] => {
  let filteredTrains = trains;
  const normalizedQuery = query.trim().toLowerCase();

  filteredTrains = trains.filter((train) =>
    `${train.number} ${train.from} ${train.to}`
      .toLowerCase()
      .includes(normalizedQuery),
  );

  return filteredTrains;
};
