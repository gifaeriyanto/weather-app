import React from 'react';
import Link from 'next/link';
import { IDropdownItem } from '../dropdown.types';
import { ItemStyled } from '../dropdown.styles';
import { useDropdownContext } from '../dropdown';

const Item: React.FC<IDropdownItem> = ({
  active = false,
  href,
  onClick,
  children,
}) => {
  const { setShow } = useDropdownContext();
  const handleClick = e => {
    if (onClick) {
      onClick(e.currentTarget.textContent);
      setShow(false);
    }
  };

  return (
    <ItemStyled active={active} onClick={handleClick}>
      {href ? (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      ) : (
        children
      )}
    </ItemStyled>
  );
};

export default Item;
