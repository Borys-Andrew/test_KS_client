import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './NavBar.scss';

export const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-bar">
        <NavLink
          className={({ isActive }) => cn('nav-bar__link', { isActive })}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => cn('nav-bar__link', { isActive })}
          to="/trains"
        >
          Trains
        </NavLink>
      </div>
    </nav>
  );
};
