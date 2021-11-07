import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import WhatIsHyperVibes from '../components/WhatIsHyperVibes';
import HowToSpreadGoodHyperVibes from '../components/HowToSpreadGoodHyperVibes';
import FAQ from '../components/FAQ';
// @ts-ignore
import arrowDownIcon from '../assets/images/icons/arrow-down.svg';
// @ts-ignore
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

const Stair = styled.div`
  position: absolute;
`;

const StairOne = styled(Stair)`
  position: absolute;
  top: 50%;
  left: 30%;
  width: 23%;
  height: 5%;
`;

const StairTwo = styled(Stair)`
  position: absolute;
  top: 43%;
  left: 33%;
  width: 16%;
  height: 5%;
`;

const StairThree = styled(Stair)`
  position: absolute;
  top: 35%;
  left: 36%;
  width: 15%;
  height: 4%;
`;

const StairFour = styled(Stair)`
  position: absolute;
  top: 30%;
  left: 39%;
  width: 16%;
  height: 4%;
`;

const StairFive = styled(Stair)`
  position: absolute;
  top: 25.5%;
  left: 46%;
  width: 13%;
  height: 4%;
`;

const StairSix = styled(Stair)`
  position: absolute;
  top: 21.5%;
  left: 53%;
  width: 12%;
  height: 3.5%;
`;

const StairSeven = styled(Stair)`
  position: absolute;
  top: 16.5%;
  left: 55%;
  width: 13%;
  height: 3.5%;
`;

const StairEight = styled(Stair)`
  position: absolute;
  top: 11%;
  left: 62%;
  width: 13%;
  height: 4.5%;
`;

const IndexPage = () => {
  const backgroundMusic = useRef<HTMLAudioElement>(null);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const stairOneSound = useRef<HTMLAudioElement>(null);
  const stairTwoSound = useRef<HTMLAudioElement>(null);
  const stairThreeSound = useRef<HTMLAudioElement>(null);
  const stairFourSound = useRef<HTMLAudioElement>(null);
  const stairFiveSound = useRef<HTMLAudioElement>(null);
  const stairSixSound = useRef<HTMLAudioElement>(null);
  const stairSevenSound = useRef<HTMLAudioElement>(null);
  const stairEightSound = useRef<HTMLAudioElement>(null);

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

        <StairOne
          onMouseEnter={() => isSoundOn && stairOneSound.current?.play()}
        />
        <StairTwo
          onMouseEnter={() => isSoundOn && stairTwoSound.current?.play()}
        />
        <StairThree
          onMouseEnter={() => isSoundOn && stairThreeSound.current?.play()}
        />
        <StairFour
          onMouseEnter={() => isSoundOn && stairFourSound.current?.play()}
        />
        <StairFive
          onMouseEnter={() => isSoundOn && stairFiveSound.current?.play()}
        />
        <StairSix
          onMouseEnter={() => isSoundOn && stairSixSound.current?.play()}
        />
        <StairSeven
          onMouseEnter={() => isSoundOn && stairSevenSound.current?.play()}
        />
        <StairEight
          onMouseEnter={() => isSoundOn && stairEightSound.current?.play()}
        />

        <audio ref={stairOneSound}>
          <source src="./stair-1.mp3" type="audio/mpeg" />
        </audio>

        <audio ref={stairTwoSound}>
          <source src="./stair-1.mp3" type="audio/mpeg" />
        </audio>

        <audio ref={stairThreeSound}>
          <source src="./stair-1.mp3" type="audio/mpeg" />
        </audio>

        <audio ref={stairFourSound}>
          <source src="./stair-1.mp3" type="audio/mpeg" />
        </audio>

        <audio ref={stairFiveSound}>
          <source src="./stair-1.mp3" type="audio/mpeg" />
        </audio>

        <audio ref={stairSixSound}>
          <source src="./stair-1.mp3" type="audio/mpeg" />
        </audio>

        <audio ref={stairSevenSound}>
          <source src="./stair-1.mp3" type="audio/mpeg" />
        </audio>

        <audio ref={stairEightSound}>
          <source src="./stair-1.mp3" type="audio/mpeg" />
        </audio>
      </VideoContainer>

      <Layout>
        <WhatIsHyperVibes />
        <HowToSpreadGoodHyperVibes />
        <FAQ />
      </Layout>

      <SoundToggle
        onClick={() => {
          if (isSoundOn) {
            backgroundMusic.current?.pause();
            setIsSoundOn(false);
          } else {
            backgroundMusic.current?.play();
            setIsSoundOn(true);
          }
        }}
      >
        <img src={soundOffIcon} alt="" />
        <SoundToggleText>
          {isSoundOn ? 'Sound On' : 'Sound Off'}
        </SoundToggleText>
      </SoundToggle>

      <audio ref={backgroundMusic} loop>
        <source src="./hypervibes.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default IndexPage;
