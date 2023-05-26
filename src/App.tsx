import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'use-react-router-breadcrumbs';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { Trains } from './pages/Trains';
import { PageNotFound } from './pages/PageNotFound';
import './App.scss';

export const App: React.FC = () => {
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
