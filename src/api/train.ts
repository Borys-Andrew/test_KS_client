import { TrainData } from '../types';

// const BASE_URL = '';
const BASE_URL = 'http://localhost:8080';

export const getTrains = async () => {
  const fetchUrl = `${BASE_URL}/trains`;

  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    return data;
  } catch {
    throw new Error('bad request');
  }
};

export const getTrainById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/trains/${id}`);
    const data = await response.json();

    return data;
  } catch {
    throw new Error('bad request');
  }
};


export const addTrain = async (newTrain: TrainData) => {
  const fetchUrl = `${BASE_URL}/trains`;

  try {
    const response = await fetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrain),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('bad request');
  }
};

export const editTrain = async (id: string, data: TrainData) => {
  const fetchUrl = `${BASE_URL}/trains/${id}`;

  try {
    const response = await fetch(fetchUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const editedTrain = await response.json();

    return editedTrain;
  } catch (error) {
    throw new Error('bad request');
  }
};

export const removeTrain = async (trainId: string) => {
  const fetchUrl = `${BASE_URL}/trains/${trainId}`;

  try {
    const response = await fetch(fetchUrl, {
      method: 'DELETE',
    });

    if (response.ok) {
      return true;
    }
  } catch (error) {
    throw new Error('bad request');
  }
};
