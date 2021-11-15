import styled from 'styled-components';
import externalLinkIcon from '../assets/images/icons/external-link.svg';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px 0 100px 40px;
  width: 100%;
  align-items: center;
  background: linear-gradient(#090909 50%, transparent 100%);
  z-index: 1;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1080px) {
    padding-left: 120px;
  }

  @media (min-width: 1170px) {
    padding-left: 120px;
    display: flex;
  }
`;

const NavItem = styled.div`
  padding-right: 6px;
  margin-right: 26px;
  font-family: '3616 Grammastile', sans-serif;
  font-size: 6px;
  line-height: 12px;
  color: #fff;

  a {
    display: flex;
    align-items: start;
  }
`;

const ExternalLinkIcon = styled.img`
  position: relative;
  top: 1px;
  left: 5px;
`;

export const Nav = () => (
  <Container>
    <NavItem>
      <a
        href="#what-is"
        onClick={e => {
          e.preventDefault();
          document
            .getElementById('what-is')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        What Is
      </a>
    </NavItem>
    <NavItem>
      <a
        href="#how-to"
        onClick={e => {
          e.preventDefault();
          document
            .getElementById('how-to')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        How To
      </a>
    </NavItem>
    <NavItem>
      <a
        href="#faq"
        onClick={e => {
          e.preventDefault();
          document
            .getElementById('faq')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        FAQ
      </a>
    </NavItem>
    <NavItem>
      <a href="https://docs.hypervibes.xyz" target="_blank" rel="noreferrer">
        <span>Learn</span>
        <ExternalLinkIcon src={externalLinkIcon} alt="" />
      </a>
    </NavItem>
  </Container>
);
