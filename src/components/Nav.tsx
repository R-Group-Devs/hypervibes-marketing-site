import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  padding: 32px 0;
  left: 120px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.div`
  margin-right: 32px;
  font-family: '3616 Grammastile', sans-serif;
  font-size: 6px;
  color: #fff;
`;

export const Nav = () => (
  <Container>
    <NavItem>
      <a href="#what-is">What Is</a>
    </NavItem>
    <NavItem>
      <a href="#how-to">How To</a>
    </NavItem>
    <NavItem>
      <a href="#faq">FAQ</a>
    </NavItem>
    <NavItem>
      <a href="#contact-us">Contact Us</a>
    </NavItem>
  </Container>
);
