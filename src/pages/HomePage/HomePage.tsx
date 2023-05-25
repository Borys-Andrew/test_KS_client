import React from 'react';
import { Container } from '../../components/Container';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className="home">
      <Container>
        <h1>Home Page component</h1>
      </Container>
    </div>
  );
};
