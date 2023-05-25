import React from 'react';
import { Container } from '../../components/Container';
import './PageNotFound.scss';

export const PageNotFound: React.FC = () => {
  return (
    <div className="not-found">
      <Container>
        <h1>Page not found</h1>
      </Container>
    </div>
  );
};
