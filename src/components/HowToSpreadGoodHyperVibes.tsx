import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import heading from '../assets/images/headings/how-to-spread-good-hypervibes.svg';
// @ts-ignore
import glacier from '../assets/images/glacier.png';
// @ts-ignore
import circlesBg from '../assets/images/circles-bg.png';
// @ts-ignore
import starsBg from '../assets/images/stars-bg.png';
// @ts-ignore
import lathe from '../assets/images/lathe.png';

const Container = styled.div`
  padding-top: 120px;
  width: 100%;
  height: 100vh;
  background: url(${circlesBg}) 0 0 no-repeat;
  background-size: 1004px auto;
  background-position: 300px 290px;
`;

const InnerBackground = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 100vh;
  background: url(${starsBg}) 0 0 no-repeat;
  background-size: 1308px auto;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: start;
`;

const Glacier = styled.img`
  margin: -15px 30px 0 0;
  width: 50px;
`;

const Heading = styled.img``;

const Bullets = styled.div`
  display: flex;
  margin-left: 80px;
`;

const BulletOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  font-size: 16px;
  line-height: 22px;
  margin-right: 90px;
`;

const BulletTwo = styled.div`
  margin-top: 130px;
  width: 277px;
  font-size: 16px;
  line-height: 22px;
  margin-right: 90px;
`;

const BulletThree = styled.div`
  margin-top: 130px;
  width: 277px;
  font-size: 16px;
  line-height: 22px;
`;

const BulletText = styled.div`
  width: 277px;
  font-size: 16px;
  line-height: 22px;
`;

const BulletTitle = styled.div`
  font-family: '3616 Grammastile', sans-serif;
  font-size: 8px;
  color: #17ffe3;
`;

const Lathe = styled.img`
  position: relative;
  top: -30px;
  width: 133px;
  height: auto;
`;

const HowToSpreadGoodHyperVibes = () => (
  <Container>
    <InnerBackground>
      <HeadingContainer>
        <div>
          <Glacier src={glacier} alt="" />
        </div>
        <Heading src={heading} alt="What is HyperVIBES?" />
      </HeadingContainer>

      <Bullets>
        <BulletOne>
          <Lathe src={lathe} alt="" />
          <BulletText>
            <BulletTitle>Decentralized Curation</BulletTitle>
            <p>
              The possibilities are endless in the realms that you can imagine.
              What would you do with that power?
            </p>
          </BulletText>
        </BulletOne>

        <BulletTwo>
          <Lathe src={lathe} alt="" />
          <BulletText>
            <BulletTitle>Token Distribution</BulletTitle>
            <p>
              The possibilities are endless in the realms that you can imagine.
              What would you do with that power?
            </p>
          </BulletText>
        </BulletTwo>

        <BulletThree>
          <Lathe src={lathe} alt="" />
          <BulletText>
            <BulletTitle>Governance x NFT</BulletTitle>
            <p>
              The possibilities are endless in the realms that you can imagine.
              What would you do with that power?
            </p>
          </BulletText>
        </BulletThree>
      </Bullets>
    </InnerBackground>
  </Container>
);

export default HowToSpreadGoodHyperVibes;
