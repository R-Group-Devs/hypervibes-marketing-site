import React from 'react';
import styled from 'styled-components';
import { darken, desaturate } from 'polished';

const Container = styled.header`
  position: absolute;
  top: 32px;
  right: 10%;
`;

const LaunchApp = styled.a`
  padding-bottom: 5px;
  font-family: '3616 Grammastile', sans-serif;
  font-size: 10px;
  color: #fff;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`;

export const Header = () => (
  <Container>
    <LaunchApp href="https://app.hypervibes.xyz">Launch App</LaunchApp>
  </Container>
);
