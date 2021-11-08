import { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import WhatIsHyperVibes from '../components/WhatIsHyperVibes';
import HowToSpreadGoodHyperVibes from '../components/HowToSpreadGoodHyperVibes';
import FAQ from '../components/FAQ';
import { StairSFX } from '../components/StairSFX';
import { BackgroundMusic } from '../components/BackgroundMusic';
import arrowDownIcon from '../assets/images/icons/arrow-down.svg';
import soundOnIcon from '../assets/images/icons/sound-on.svg';
import soundOffIcon from '../assets/images/icons/sound-off.svg';

const StairsContainer = styled.div`
  position: relative;
  padding-top: 50px;
  min-width: 100%;

  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1170px) {
    padding-top: 75px;
  }
`;

const Video = styled.video`
  padding: 0 10% 50%;
  width: 100%;
  display: block;
  background: linear-gradient(#090909 60%, transparent 100%);

  @media (min-width: 880px) {
    padding: 0 19% 35%;
  }
`;

const Description = styled.div`
  position: absolute;
  bottom: 45%;
  left: 120px;
  width: 228px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
  color: #fff;
  display: none;

  @media (min-width: 1170px) {
    display: block;
  }

  @media (min-width: 1400px) {
    width: 308px;
    font-size: 16px;
    line-height: 22px;
  }
`;

const Scroll = styled.div`
  position: absolute;
  bottom: 37%;
  left: 48%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: '3616 Grammastile', sans-serif;
  font-size: 6px;
  color: #17ffe3;
  z-index: 2;
  display: none;

  @media (min-width: 1170px) {
    display: flex;
  }

  @media (min-width: 1400px) {
    bottom: 40%;
  }
`;

const ArrowDown = styled.img`
  margin-bottom: 16px;
  width: 10px;
  height: auto;
`;

const SoundToggle = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 95px;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 880px) {
    display: flex;
  }
`;

const SoundToggleText = styled.div`
  margin-top: 10px;
  font-family: '3616 Grammastile', sans-serif;
  font-size: 6px;
  color: #fff;
`;

const SoundOnIcon = styled.img`
  margin-left: 2px;
  display: inline-block;
`;

const Door = styled.div`
  position: absolute;
  top: 40%;
  left: 52.5%;
  width: 6%;
  height: 12.5%;

  &:hover {
    cursor: n-resize;
  }

  @media (min-width: 1170px) {
    top: 38%;
  }

  @media (min-width: 1260px) {
    top: 37%;
  }

  &:after {
    position: relative;
    top: 40%;
    left: -12%;
    padding: 18px 0 0 11px;
    content: 'Soon';
    opacity: 0;
    width: 45px;
    height: 45px;
    background: #bcff67;
    border-radius: 50%;
    font-size: 10px;
    text-transform: uppercase;
    color: #000;
    transition: opacity 0.2s;
    box-sizing: border-box;
    display: none;

    @media (min-width: 1000px) {
      display: block;
    }

    @media (min-width: 1170px) {
      top: 45%;
      left: -12%;
      padding: 18px 0 0 11px;
      width: 45px;
      height: 45px;
    }

    @media (min-width: 1260px) {
      top: 42%;
      left: -10%;
      padding: 22px 0 0 14px;
      width: 52px;
      height: 52px;
    }
  }

  &:hover:after {
    opacity: 1;
  }
`;

const SoundOffIcon = styled.img``;

const IndexPage = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);

  return (
    <>
      <SEO title="Home" />
      <StairsContainer>
        <Video autoPlay loop muted>
          <source src="./stairway.webm" type="video/webm" />
        </Video>

        <Description>
          <strong>Be the NFT Alchemist&mdash;</strong>
          <br />
          The possibilities are endless in the realms of your imagination. What
          would you do with that power?
        </Description>

        <Scroll>
          <ArrowDown src={arrowDownIcon} alt="" />
          Scroll
        </Scroll>

        <Door />

        <StairSFX isSoundOn={isSoundOn} />
        <BackgroundMusic isSoundOn={isSoundOn} />
      </StairsContainer>

      <Layout>
        <WhatIsHyperVibes />
        <HowToSpreadGoodHyperVibes />
        <FAQ />
      </Layout>

      <SoundToggle onClick={() => setIsSoundOn(!isSoundOn)}>
        {isSoundOn ? (
          <SoundOnIcon src={soundOnIcon} alt="" />
        ) : (
          <SoundOffIcon src={soundOffIcon} alt="" />
        )}
        <SoundToggleText>
          {isSoundOn ? 'Sound On' : 'Sound Off'}
        </SoundToggleText>
      </SoundToggle>
    </>
  );
};

export default IndexPage;
