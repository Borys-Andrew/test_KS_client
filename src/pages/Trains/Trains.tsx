import React, { useCallback, useEffect, useState } from 'react';
import { addTrain, editTrain, getTrains, removeTrain } from '../../api/train';
import { Container } from '../../components/Container';
import { Modal } from '../../components/Modal';
import { TrainForm } from '../../components/TrainForm/TrainForm';
import { TrainsTable } from '../../components/TrainsTable';
import { Train, TrainData } from '../../types';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import './Trains.scss';

export const Trains: React.FC = () => {
  const [trains, setTrains] = useState<Train[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [trainToEdit, setTrainToEdit] = useState<Train | null>(null);

  const getAll = async () => {
    try {
      setIsLoading(true);
      const data = await getTrains();

      setTrains(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleAddTrain = useCallback(async (train: TrainData) => {
    try {
      setIsLoading(true);
      await addTrain(train);
      getAll();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      setIsModal(false);
    }
  }, []);

  const handleEditTrain = useCallback(async (id: string, data: TrainData) => {
    try {
      setIsLoading(true);
      await editTrain(id, data);
      getAll();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      setIsModal(false);
    }
  }, []);

  const deleteTrain = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      await removeTrain(id);
      getAll();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleStartAddTrain = useCallback(() => {
    setTrainToEdit(null);
    setIsModal(true);
  }, []);

  const handleStartEditTrain = useCallback((train: Train) => {
    setTrainToEdit(train);
    setIsModal(true);
  }, []);

  console.log('isLoading >>', isLoading);

  return (
    <div className="trains">
      <Container>
        <TrainsTable
          trains={trains}
          deleteTrain={deleteTrain}
          onAdd={handleStartAddTrain}
          onEdit={handleStartEditTrain}
        />
      </Container>

      <>
        {isLoading && Loading.dots('Loading...')}
        {Loading.remove()}
      </>

      {isModal && (
        <Modal setActive={setIsModal}>
          <TrainForm
            trainToUpdate={trainToEdit}
            setActive={setIsModal}
            addTrain={handleAddTrain}
            editTrain={handleEditTrain}
          />
        </Modal>
      )}
    </div>
  );
};
