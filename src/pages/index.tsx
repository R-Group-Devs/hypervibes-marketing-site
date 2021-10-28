import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Animated } from '../components/Animated';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="HyperVIBES" />
      <Animated>home page.</Animated>
    </Layout>
  );
};

export default IndexPage;
