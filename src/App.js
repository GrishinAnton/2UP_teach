// @flow
import * as React from 'react';
import styled from 'styled-components';
// ASSETS
import Logo from './logo.svg';
// EXPORTED COMPONENT
const App = () => (
  <Content>
    <Header className="App-title">Welcome to React</Header>
    <Logo />
  </Content>
);

export default App;

const Header = styled.h1`
  font-size: 36px;
  justify-self: center;
`;

const Content = styled.div`
  display: grid;
`;
