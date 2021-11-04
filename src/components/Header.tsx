import React from 'react';
import styled from 'styled-components';
import { darken, desaturate } from 'polished';

const Container = styled.header`
  display: flex;
  margin: 0 auto;
  padding: 0;
  max-width: 960px;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const Header = () => <Container></Container>;
