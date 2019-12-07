import styled from '@emotion/styled';
import { Color } from '../../utilities';
import { IMenuStyled, IItemStyled } from './dropdown.types';

export const ToggleStyled = styled.div`
  cursor: pointer;
`;

export const ItemStyled = styled.div<IItemStyled>(({ active }) => ({
  minWidth: 150,
  padding: '9px 12px',
  borderRadius: 6,
  cursor: 'pointer',
  color: active ? Color.white : Color.body,
  backgroundColor: active ? Color.primary : Color.white,
  margin: 2,
  '&:hover': {
    backgroundColor: active ? Color.primary : Color.backgroundSoft,
  },
  a: {
    color: active ? Color.white : Color.body,
    textDecoration: 'none',
  },
}));

export const MenuStyled = styled.div<IMenuStyled>(
  ({ show, right, noHoverEffect }) => ({
    position: 'absolute',
    display: show ? 'block' : 'none',
    boxShadow: `0px 4px 34px 3px rgba(0, 0, 0, .2)`,
    padding: 8,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: Color.white,
    right: right ? 0 : 'initial',
    zIndex: 9,
    [`${ItemStyled}`]: {
      backgroundColor: noHoverEffect ? Color.white : '',
    },
  }),
);

export const Wrapper = styled.div`
  position: relative;
  background-color: ${Color.backgroundSoft};
  border-radius: 8px;
  padding: 6px 10px;
  margin-bottom: 20px;
`;
