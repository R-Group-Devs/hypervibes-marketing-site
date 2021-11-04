import React, { useLayoutEffect } from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import speRuntime from '../lib/runtime';

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
      <SEO title="HyperVIBES" />

      <canvas id="canvas3d"></canvas>
    </Layout>
  );
};

export default IndexPage;
