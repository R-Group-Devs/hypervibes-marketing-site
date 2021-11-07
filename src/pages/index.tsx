import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import WhatIsHyperVibes from '../components/WhatIsHyperVibes';
import HowToSpreadGoodHyperVibes from '../components/HowToSpreadGoodHyperVibes';
import FAQ from '../components/FAQ';
import arrowDownIcon from '../assets/images/icons/arrow-down.svg';
import soundOffIcon from '../assets/images/icons/sound-off.svg';

const VideoContainer = styled.div`
  position: relative;
  padding-top: 75px;
  min-width: 100%;
`;

const Video = styled.video`
  padding: 0 19% 35%;
  width: 100%;
  display: block;
  background: linear-gradient(#090909 60%, transparent 100%);
`;

const Description = styled.div`
  position: absolute;
  bottom: 45%;
  left: 120px;
  width: 308px;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
`;

const Scroll = styled.div`
  position: absolute;
  bottom: 40%;
  left: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: '3616 Grammastile', sans-serif;
  font-size: 6px;
  color: #17ffe3;
  z-index: 2;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

const SoundToggleText = styled.div`
  margin-top: 10px;
  font-family: '3616 Grammastile', sans-serif;
  font-size: 6px;
  color: #fff;
`;

const IndexPage = () => {
  const audio = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <SEO title="Home" />
      <VideoContainer>
        <Video autoPlay loop muted>
          <source src="./stairway.webm" type="video/webm" />
        </Video>

        <Description>
          <strong>Be the NFT Alchemist&mdash;</strong>
          <br />
          The possibilities are endless in the realms that you can imagine. What
          would you do with that power?
        </Description>

        <Scroll>
          <ArrowDown src={arrowDownIcon} alt="" />
          Scroll
        </Scroll>
      </VideoContainer>

      <Layout>
        <WhatIsHyperVibes />
        <HowToSpreadGoodHyperVibes />
        <FAQ />
      </Layout>

      <SoundToggle
        onClick={() => {
          if (audio.current?.paused) {
            audio.current?.play();
            setIsPlaying(true);
          } else {
            audio.current?.pause();
            setIsPlaying(false);
          }
        }}
      >
        <img src={soundOffIcon} alt="" />
        <SoundToggleText>
          {isPlaying ? 'Sound On' : 'Sound Off'}
        </SoundToggleText>
      </SoundToggle>

      <audio ref={audio} loop>
        <source src="./hypervibes.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default IndexPage;
