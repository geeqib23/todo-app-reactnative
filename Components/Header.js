import React from 'react';
import styled from 'styled-components';

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  return (
    <ComponentContainer>
      <HeaderText>To-Do.</HeaderText>
      {/* <HeaderList>{today}</HeaderList> */}
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-weight: bold;
  font-family: monospace;
  font-size: 35px;
`;

// const HeaderList = styled.Text`
//   color: white;
//   font-family: monospace;
//   font-size: 20px;
//   margin-right: 20px;
// `;
