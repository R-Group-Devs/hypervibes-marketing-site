import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { lighten } from 'polished';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header';
import { colors } from '../constants/colors';
import './fonts.css';

interface Props {
  children: React.ReactNode;
  width?: number;
}

const Root = styled.div`
  min-height: 100vh;
  padding-left: 145px;
`;

const Container = styled.div`
  max-height: 100vh;
  color: ${lighten(0.83, colors.primary)};
`;

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Footer = styled.footer`
  margin-top: 20px;
`;

export const Layout = ({ children }: Props) => {
  return (
    <Root>
      <GlobalStyle />
      <Container>
        <Header />
        <Content>
          {children}
          <Footer />
        </Content>
      </Container>
    </Root>
  );
};
