import React, { ReactNode } from 'react';
import './Container.scss';

type ContainerProps = {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="child">{children}</div>
    </div>
  );
};
