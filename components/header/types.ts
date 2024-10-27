import { RefObject } from 'react'

export interface BrandLogoProps {
  titleRef: RefObject<HTMLHeadingElement>;
  subtitleRef: RefObject<HTMLSpanElement>;
}

export interface HeaderActionsProps {
  phoneRef: RefObject<HTMLDivElement>;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface MobileNavLinksProps {
  onLinkClick: () => void;
}

export interface MobileActionsProps {
    onActionClick: () => void
  }