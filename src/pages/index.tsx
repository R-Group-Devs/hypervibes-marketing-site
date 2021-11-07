import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import WhatIsHyperVibes from '../components/WhatIsHyperVibes';
import HowToSpreadGoodHyperVibes from '../components/HowToSpreadGoodHyperVibes';
import FAQ from '../components/FAQ';

const Video = styled.video`
  width: 100%;
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

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Video autoPlay loop muted>
        <source src="./stairway.mp4" type="video/mp4" />
      </Video>

      <Description>
        <strong>Be the NFT Alchemist&mdash;</strong>
        <br />
        The possibilities are endless in the realms that you can imagine. What
        would you do with that power?
      </Description>

      <Layout>
        <WhatIsHyperVibes />
        <HowToSpreadGoodHyperVibes />
      </Layout>

      <FAQ />
    </>
  );
};

export default IndexPage;
