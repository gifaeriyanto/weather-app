import React from 'react';
import { useDropdownContext } from '../dropdown';
import { ToggleStyled } from '../dropdown.styles';

const Toggle: React.FC = ({ children, ...props }) => {
  const { show, setShow } = useDropdownContext();

  return (
    <ToggleStyled onClick={() => setShow(!show)} {...props}>
      {children}
    </ToggleStyled>
  );
};

export default Toggle;
