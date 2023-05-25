import React from 'react';
import { Container } from '../Container';
import { NavBar } from '../NavBar';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Container>
        <NavBar />
      </Container>
    </div>
  );
};
