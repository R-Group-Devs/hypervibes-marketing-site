import styled from 'styled-components';
import playgroundsLogo from '../assets/images/playgrounds-logo.png';

const Container = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 60px;
  background: #090909;
`;

const BuiltAt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a:hover {
    border-bottom-color: transparent;
  }
`;

const BuiltAtDescription = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  border-bottom: 1px solid #17ffe3;
`;

const PlaygroundsLogo = styled.img`
  margin-top: 12px;
  width: 50px;
  height: auto;
`;

export const Footer = () => (
  <Container id="contribute">
    <BuiltAt>
      <BuiltAtDescription>Dreamt up & built at</BuiltAtDescription>

      <a href="https://discord.gg/eT5hD56Brt" target="_blank" rel="noreferrer">
        <PlaygroundsLogo src={playgroundsLogo} alt="Playgrounds" />
      </a>
    </BuiltAt>
  </Container>
);
