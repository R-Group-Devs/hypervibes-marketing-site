import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
// @ts-ignore
import speRuntime from '../lib/runtime';
import WhatIsHyperVibes from '../components/WhatIsHyperVibes';
import HowToSpreadGoodHyperVibes from '../components/HowToSpreadGoodHyperVibes';

const CanvasContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 200px;
  width: 100%;
  background: #090909;
`;

const Canvas = styled.canvas`
  margin-left: -90px;
  width: auto !important;
  height: 80vh !important;
`;

const SpeRuntime = speRuntime();
// @ts-ignore
const app = new SpeRuntime.Application();

const IndexPage = () => {
  useLayoutEffect(() => {
    // @ts-ignore
    app.start('./scene.json');
  }, []);

  return (
    <>
      <SEO title="Home" />
      <CanvasContainer>
        <Canvas id="canvas3d"></Canvas>
      </CanvasContainer>

      <Layout>
        <WhatIsHyperVibes />
        <HowToSpreadGoodHyperVibes />
      </Layout>
    </>
  );
};

export default IndexPage;
