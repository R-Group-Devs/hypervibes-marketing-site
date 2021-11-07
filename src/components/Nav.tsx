import styled from 'styled-components';

interface Props {
  position?: 'top' | 'bottom';
}

const Container = styled.div<{ position: Props['position'] }>`
  position: ${({ position }) => (position === 'top' ? 'fixed' : 'absolute')};
  top: ${({ position }) => (position === 'top' ? 0 : 'auto')};
  bottom: ${({ position }) => (position === 'bottom' ? 0 : 'auto')};
  left: 0;
  padding: ${({ position }) =>
    position === 'top' ? '32px 0 100px 90px' : '32px 0 75px 90px'};
  width: ${({ position }) => (position === 'top' ? '100%' : 'auto')};
  align-items: center;
  background: ${({ position }) =>
    position === 'top'
      ? 'linear-gradient(#090909 50%, transparent 100%)'
      : 'none'};
  z-index: 1;
  display: none;

  @media (min-width: 1080px) {
    padding-left: 120px;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavItem = styled.div`
  margin-right: 32px;
  font-family: '3616 Grammastile', sans-serif;
  font-size: 6px;
  color: #fff;
`;

export const Nav = ({ position = 'top' }: Props) => (
  <Container position={position}>
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
      <a
        href="#contribute"
        onClick={e => {
          e.preventDefault();
          document
            .getElementById('contribute')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Contribute
      </a>
    </NavItem>
  </Container>
);
