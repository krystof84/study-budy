import React from 'react';
import {
  NavWrapper,
  NavList,
  NavListItem,
  NavItemLogo,
} from './Navigation.styles';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <NavWrapper>
      <NavItemLogo>
        Study
        <br />
        Budy
      </NavItemLogo>
      <NavList>
        <NavListItem>
          <Link className="nav-link-item" to="/">
            Home
          </Link>
        </NavListItem>
        <NavListItem>
          <Link className="nav-link-item" to="/add-user">
            Add user
          </Link>
        </NavListItem>
      </NavList>
    </NavWrapper>
  );
};

export default Navigation;
