import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'use-react-router-breadcrumbs';
import // addTrain,
// deleteTrain,
// getTrains,
'./api/train';
import './App.scss';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import { Trains } from './pages/Trains';
// import { Train } from './types';

export const App: React.FC = () => {
  // const addNewTraine = async (newTrain: Train) => {
  //   try {
  //     const data = await addTrain(newTrain);
  //     getSchedule();

  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const newest = {
  // number: 777,
  // from: 'Brody',
  // to: 'Kyiv',
  // days: ['5', '6', '7'],
  // departure: '16:20',
  // arrival: '21:15',
  // };

  // useEffect(() => {
  //   addNewTraine(newest);
  // }, []);

  // const removeTrain = async (trainId: string) => {
  //   try {
  //     await deleteTrain(trainId);
  //     getSchedule();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   removeTrain('3');
  //   getTrains('');
  // }, []);

  // console.log(trains);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/trains" element={<Trains />} />
      </Routes>
    </div>
  );
};
