import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
// @ts-ignore
import speRuntime from '../lib/runtime';
// @ts-ignore
import heading from '../assets/images/headings/what-is-hypervibes.svg';
// @ts-ignore
import eye from '../assets/images/eye.svg';

const Canvas = styled.canvas`
  width: auto !important;
  max-width: 72% !important;
  height: 43.929% !important;
`;

const Eye = styled.img`
  margin-bottom: 65px;
`;

const Heading = styled.img`
  margin-bottom: 105px;
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
    <Layout>
      <SEO title="Home" />

      <Canvas id="canvas3d"></Canvas>
    </Layout>
  );
};

export default IndexPage;
