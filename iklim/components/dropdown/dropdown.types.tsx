export interface IDropdownContext {
  show: boolean;
  setShow: (arg0: boolean) => void;
}

export interface IDropdownItem {
  active?: boolean;
  href?: string;
  onClick?: (value: string) => void;
}

export interface IDropdownMenu {
  right?: boolean;
  noHoverEffect?: boolean;
}

export interface IMenuStyled {
  show: boolean;
  right?: boolean;
  noHoverEffect?: boolean;
}

export interface IItemStyled {
  active: boolean;
}
