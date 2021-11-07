import React from 'react';
import styled from 'styled-components';
import raribleDaoLogo from '../assets/images/rarible-dao-logo.png';

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 112px;
  padding-bottom: 42px;
  background: #090909;
`;

const BuiltAt = styled.div`
  display: flex;
  flex-direction: column;
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
  <Container>
    <BuiltAt>
      <BuiltAtDescription>Dreamt up & built at</BuiltAtDescription>
      <RaribleDaoLogo src={raribleDaoLogo} alt="Rarible DAO" />
    </BuiltAt>
  </Container>
);
