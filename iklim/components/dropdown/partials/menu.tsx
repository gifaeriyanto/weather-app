import React from 'react';
import { IDropdownMenu } from '../dropdown.types';
import { useDropdownContext } from '../dropdown';
import { MenuStyled } from '../dropdown.styles';

const Menu: React.FC<IDropdownMenu> = ({ right, noHoverEffect, children }) => {
  const { show } = useDropdownContext();

  return (
    <MenuStyled show={show} noHoverEffect={noHoverEffect} right={right}>
      {children}
    </MenuStyled>
  );
};

export default Menu;
