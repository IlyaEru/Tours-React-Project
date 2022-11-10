import React from 'react';
import { StyledHeader } from './Header.style';

interface Props {
  headerText: string;
}

export default function Header({ headerText }: Props) {
  return (
    <StyledHeader>
      <h1>{headerText}</h1>
      {headerText === 'Our Tours' && <div className="underline"></div>}
    </StyledHeader>
  );
}
