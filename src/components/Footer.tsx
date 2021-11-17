import styled from 'styled-components';
import { Nav } from './Nav';
import raribleDaoLogo from '../assets/images/rarible-dao-logo.png';

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

const RaribleDaoLogo = styled.img`
  margin-top: 12px;
  width: 168px;
  height: auto;
`;

export const Footer = () => (
  <Container id="contribute">
    <BuiltAt>
      <BuiltAtDescription>Dreamt up & built at</BuiltAtDescription>

      <a href="https://discord.gg/NuWv54RdMh" target="_blank" rel="noreferrer">
        <RaribleDaoLogo src={raribleDaoLogo} alt="Rarible DAO" />
      </a>
    </BuiltAt>
  </Container>
);
