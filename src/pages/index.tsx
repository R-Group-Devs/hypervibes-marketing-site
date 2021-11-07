import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import WhatIsHyperVibes from '../components/WhatIsHyperVibes';
import HowToSpreadGoodHyperVibes from '../components/HowToSpreadGoodHyperVibes';
import FAQ from '../components/FAQ';
import arrowDown from '../assets/images/icons/arrow-down.svg';

const VideoContainer = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(#090909 70%, transparent 100%);
`;

const Video = styled.video`
  margin: 0 auto;
  width: 90%;
  display: block;
`;

const Description = styled.div`
  position: absolute;
  bottom: 90px;
  left: 120px;
  width: 277px;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
`;

const Scroll = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: '3616 Grammastile', sans-serif;
  font-size: 6px;
  color: #17ffe3;
`;

const ArrowDown = styled.img`
  margin-bottom: 16px;
  width: 10px;
  height: auto;
`;

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <VideoContainer>
        <Video autoPlay loop muted>
          <source src="./stairway.mp4" type="video/mp4" />
        </Video>
      </VideoContainer>

      <Description>
        <strong>Be the NFT Alchemist&mdash;</strong>
        <br />
        The possibilities are endless in the realms that you can imagine. What
        would you do with that power?
      </Description>

      <Scroll>
        <ArrowDown src={arrowDown} alt="" />
        Scroll
      </Scroll>

      <Layout>
        <WhatIsHyperVibes />
        <HowToSpreadGoodHyperVibes />
        <FAQ />
      </Layout>
    </>
  );
};

export default IndexPage;
