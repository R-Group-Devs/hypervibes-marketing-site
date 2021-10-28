import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import { colors } from '../constants/colors';

interface Props {
  siteTitle: string;
}

const Container = styled.header`
  display: flex;
  margin: 0 auto;
  padding: 64px 20px 80px;
  max-width: 960px;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  color: #e2e2f3;
  font-size: 28px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: -0.5px;
  text-decoration: none;
`;

const Nav = styled.nav`
  margin: 10px 0 0 100px;

  @media (max-width: 540px) {
    margin: 40px 0 0 0;
    font-size: 18px;
  }
`;

const NavItem = styled(Link)`
  margin-right: 30px;
  padding-bottom: 6px;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid ${desaturate(0.5, darken(0.2, colors.accent))};
`;

const Separator = styled.div`
  :after {
    color: #e2e2f3;
    font-weight: 600;
    content: '_';
  }
`;

export const Header = ({ siteTitle }: Props) => (
  <Container>
    <h1>{siteTitle}</h1>
  </Container>
);
