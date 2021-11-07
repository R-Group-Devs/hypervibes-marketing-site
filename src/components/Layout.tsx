import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { lighten } from 'polished';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header';
import SocialLinks from './SocialLinks';
import { Footer } from './Footer';
import { colors } from '../constants/colors';

interface Props {
  children: React.ReactNode;
  width?: number;
}

const Root = styled.div``;

const Container = styled.div`
  color: ${lighten(0.83, colors.primary)};
`;

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

export const Layout = ({ children }: Props) => {
  return (
    <Root>
      <GlobalStyle />
      <Container>
        <Header />
        <SocialLinks />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </Root>
  );
};
