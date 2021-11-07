import React from 'react';
import styled from 'styled-components';
import { Nav } from '../components/Nav';

const Container = styled.header``;

const LaunchApp = styled.a`
  position: fixed;
  top: 32px;
  right: 10%;
  padding-bottom: 5px;
  font-family: '3616 Grammastile', sans-serif;
  font-size: 10px;
  color: #fff;
  text-decoration: none;
  z-index: 2;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`;

export const Header = () => (
  <Container>
    <Nav />
    <LaunchApp href="https://app.hypervibes.xyz">Launch App</LaunchApp>
  </Container>
);
