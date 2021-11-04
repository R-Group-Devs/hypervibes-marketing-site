import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header';
import SocialLinks from './SocialLinks';
import { Footer } from './Footer';

interface Props {
  children: React.ReactNode;
  width?: number;
}

const Root = styled.div``;

const Container = styled.div`
  color: #fff;
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
