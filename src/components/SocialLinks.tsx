import styled from 'styled-components';
import discordIcon from '../assets/images/icons/discord.svg';
import twitterIcon from '../assets/images/icons/twitter.svg';
import githubIcon from '../assets/images/icons/github.svg';

const Container = styled.div`
  position: fixed;
  bottom: 50px;
  left: 20px;
  transform: rotate(-90deg);
  transform-origin: top left;
  opacity: 0.5;
  z-index: 2;
  display: none;

  @media (min-width: 880px) {
    display: flex;
  }

  a {
    margin-right: 32px;

    &:hover {
      border-bottom: none;
    }
  }
`;

export default () => (
  <Container>
    <a href="https://discord.gg/eT5hD56Brt" target="_blank" rel="noreferrer">
      <img src={discordIcon} alt="Discord" />
    </a>

    <a
      href="https://twitter.com/playgroundswtf"
      target="_blank"
      rel="noreferrer"
    >
      <img src={twitterIcon} alt="Twitter" />
    </a>

    <a
      href="https://github.com/R-Group-Devs/hypervibes-contracts"
      target="_blank"
      rel="noreferrer"
    >
      <img src={githubIcon} alt="GitHub" />
    </a>
  </Container>
);
