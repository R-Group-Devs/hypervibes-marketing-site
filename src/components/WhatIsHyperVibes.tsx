import styled from 'styled-components';
import heading from '../assets/images/headings/what-is-hypervibes.svg';
import eye from '../assets/images/eye.png';
import circlesBg from '../assets/images/circles-bg.png';
import starsBg from '../assets/images/stars-bg.png';
import provenanceMining from '../assets/images/provenance-mining.png';
import multiTenanted from '../assets/images/multi-tenanted.png';
import publicTrustless from '../assets/images/public-trustless.png';

const Container = styled.div`
  position: relative;
  top: -250px;
  margin-bottom: -400px;
  padding-top: 90px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  background: url(${circlesBg}) 0 0 no-repeat;
  background-size: 800px auto;
  background-position: 200px 240px;

  @media (min-width: 500px) {
    top: -300px;
  }

  @media (min-width: 650px) {
    top: -350px;
  }

  @media (min-width: 880px) {
    top: -300px;
    padding-left: 90px;
    padding-right: 0;
  }

  @media (min-width: 1080px) {
    padding-left: 145px;
  }

  @media (min-width: 1260px) {
    top: -400px;
    background-size: 904px auto;
    background-position: 200px 210px;
  }

  @media (min-width: 1400px) {
    background-size: 1004px auto;
  }

  @media (min-width: 1500px) {
    background-position: 300px 210px;
  }

  @media (min-width: 1800px) {
    padding-left: 14%;
    background-position: 45% 250px;
    background-size: 1200px auto;
  }
`;

const InnerBackground = styled.div`
  padding-top: 60px;
  width: 100%;
  padding-bottom: 25px;
  background: url(${starsBg}) 0 0 no-repeat;
  background-size: 1308px auto;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: start;
`;

const Eye = styled.img`
  margin: 5px 16px 0 0;
  width: 38px;

  @media (min-width: 650px) {
    width: 47px;
  }
`;

const Heading = styled.img`
  width: 200px;

  @media (min-width: 650px) {
    width: 280px;
  }

  @media (min-width: 880px) {
    width: auto;
  }
`;

const Bullet = styled.div`
  position: relative;
  left: 15px;
  min-width: 300px;

  @media (min-width: 650px) {
    left: 0;
  }

  @media (min-width: 1080px) {
    left: -170px;
  }

  @media (min-width: 1260px) {
    left: -30px;
  }

  @media (min-width: 1500px) {
    left: 0;
  }
`;

const BulletOne = styled(Bullet)`
  display: flex;
  margin-top: 40px;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 650px) {
    margin-top: 70px;
  }

  @media (min-width: 1080px) {
    margin-left: 165px;
  }

  @media (min-width: 1260px) {
    margin-left: 45px;
  }
`;

const BulletTwo = styled(Bullet)`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 1080px) {
    margin-top: -300px;
    margin-left: 740px;
    flex-direction: column;
  }

  @media (min-width: 1260px) {
    margin-top: -300px;
    margin-left: 740px;
  }

  @media (min-width: 1400px) {
    margin-top: -300px;
    margin-left: 940px;
  }
`;

const BulletThree = styled(Bullet)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  padding-bottom: 110px;
  font-size: 16px;
  line-height: 22px;
  text-align: left;

  @media (min-width: 1080px) {
    margin-top: 20px;
    margin-left: 305px;
    text-align: right;
    flex-direction: row;
  }

  @media (min-width: 1260px) {
    margin-top: 0;
    margin-left: 245px;
  }

  @media (min-width: 1400px) {
    margin-top: -34px;
    margin-left: 385px;
  }
`;

const BulletTitle = styled.div`
  font-family: '3616 Grammastile', sans-serif;
  font-size: 8px;
  color: #17ffe3;
`;

const BulletText = styled.div`
  margin-left: 0;
  width: 100%;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 650px) {
    margin-left: 20px;
    width: 55vw;
  }

  @media (min-width: 650px) {
    margin-left: 40px;
  }

  @media (min-width: 1080px) {
    margin-left: 0;
    width: 277px;
  }
`;

const BulletOneText = styled(BulletText)`
  position: relative;
  top: 30px;

  @media (min-width: 1080px) {
    top: 70px;
  }
`;

const BulletThreeText = styled(BulletText)`
  position: relative;
  top: 30px;

  @media (min-width: 1080px) {
    top: 62px;
  }
`;

const Image = styled.img`
  position: relative;
  top: 0;
  width: 180px;
  height: auto;
  object-fit: contain;
  display: none;

  @media (min-width: 650px) {
    display: inline;
  }

  @media (min-width: 1080px) {
    top: -30px;
  }

  @media (min-width: 1260px) {
    width: 240px;
  }
`;

const WhatIsHyperVibes = () => (
  <Container id="what-is">
    <InnerBackground>
      <HeadingContainer>
        <div>
          <Eye src={eye} alt="" />
        </div>
        <Heading src={heading} alt="What is HyperVIBES?" />
      </HeadingContainer>

      <BulletOne>
        <Image src={provenanceMining} alt="" />
        <BulletOneText>
          <BulletTitle>Provenance Mining Protocol</BulletTitle>
          <p>
            Infuse any ERC-20 tokens inside of any ERC-721 NFT. Infused tokens
            can be mined and claimed by the NFT owner.
          </p>
        </BulletOneText>
      </BulletOne>

      <BulletTwo>
        <Image src={multiTenanted} alt="" />
        <BulletText>
          <BulletTitle>Multi-Tenanted</BulletTitle>
          <p>
            Create a fully isolated and independently configured HyperVIBES
            realm to run your own experiments without having to deploy a
            contract.
          </p>
        </BulletText>
      </BulletTwo>

      <BulletThree>
        <BulletThreeText>
          <BulletTitle>Public + Trustless</BulletTitle>
          <p>
            Free for everyone to use and extracts no fees. Rarible DAO does not
            retain any upgrade capabilities or privileged roles.
          </p>
        </BulletThreeText>
        <Image src={publicTrustless} alt="" />
      </BulletThree>
    </InnerBackground>
  </Container>
);

export default WhatIsHyperVibes;
