import React, { useState, useEffect, useContext, useRef } from 'react';
import { Wrapper } from './dropdown.styles';
import { IDropdownContext } from './dropdown.types';
import { Menu, Item, Toggle } from './partials';

const DropdownContext = React.createContext<IDropdownContext>({
  show: false,
  setShow: show => !show,
});

export const useDropdownContext = () => {
  const dropdownState = useContext(DropdownContext);
  return dropdownState;
};

interface IDropdown extends React.FC {
  Toggle: typeof Toggle;
  Item: typeof Item;
  Menu: typeof Menu;
}

const Dropdown: IDropdown = ({ children }) => {
  const [showState, setShowState] = useState(false);
  const wrapperRef = useRef<any>(null);

  const handleChangeState = () => {
    setShowState(!showState);
  };

  const onWindowClick = (e: any) => {
    e.stopPropagation();
    if (!wrapperRef.current.contains(e.target)) {
      setShowState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', onWindowClick);
    return () => window.removeEventListener('click', onWindowClick);
  });

  return (
    <Wrapper ref={wrapperRef}>
      <DropdownContext.Provider
        value={{
          show: showState,
          setShow: handleChangeState,
        }}
      >
        {children}
      </DropdownContext.Provider>
    </Wrapper>
  );
};

export default Dropdown;
Dropdown.Toggle = Toggle;
Dropdown.Item = Item;
Dropdown.Menu = Menu;
