import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import heading from '../assets/images/headings/what-is-hypervibes.svg';
// @ts-ignore
import eye from '../assets/images/eye.png';
// @ts-ignore
import circlesBg from '../assets/images/circles-bg.png';
// @ts-ignore
import starsBg from '../assets/images/stars-bg.png';

const Container = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 100vh;
  background: url(${circlesBg}) 0 0 no-repeat;
  background-size: 1004px auto;
  background-position: 300px 210px;
`;

const InnerBackground = styled.div`
  padding-top: 60px;
  display: flex;
  align-items: start;
  width: 100%;
  height: 100vh;
  background: url(${starsBg}) 0 0 no-repeat;
  background-size: 1308px auto;
`;

const Eye = styled.img`
  margin: 5px 16px 65px 0;
  width: 47px;
`;

const Heading = styled.img`
  margin-bottom: 105px;
`;

const WhatIsHyperVibes = () => (
  <Container>
    <InnerBackground>
      <div>
        <Eye src={eye} alt="" />
      </div>
      <Heading src={heading} alt="What is HyperVIBES?" />
    </InnerBackground>
  </Container>
);

export default WhatIsHyperVibes;
