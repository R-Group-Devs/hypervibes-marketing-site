import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
// @ts-ignore
import speRuntime from '../lib/runtime';
import WhatIsHyperVibes from '../components/WhatIsHyperVibes';

const Canvas = styled.canvas`
  width: auto !important;
  max-width: 72% !important;
  height: 43.929% !important;
  display: none;
`;

const SpeRuntime = speRuntime();
// @ts-ignore
const app = new SpeRuntime.Application();

const IndexPage = () => {
  useLayoutEffect(() => {
    // @ts-ignore
    //app.start('./scene.json');
  }, []);

  return (
    <Layout>
      <SEO title="Home" />

      <Canvas id="canvas3d"></Canvas>

      <WhatIsHyperVibes />
    </Layout>
  );
};

export default IndexPage;
