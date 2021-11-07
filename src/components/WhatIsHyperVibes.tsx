import styled from 'styled-components';
import heading from '../assets/images/headings/what-is-hypervibes.svg';
import eye from '../assets/images/eye.png';
import circlesBg from '../assets/images/circles-bg.png';
import starsBg from '../assets/images/stars-bg.png';
import lathe from '../assets/images/lathe.png';
import lathe2 from '../assets/images/lathe-2.png';
import weirdoWire from '../assets/images/weirdo-wire.png';

const Container = styled.div`
  position: relative;
  top: -300px;
  margin-bottom: -400px;
  padding-top: 90px;
  padding-left: 90px;
  width: 100%;
  background: url(${circlesBg}) 0 0 no-repeat;
  background-size: 800px auto;
  background-position: 200px 240px;

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
`;

const InnerBackground = styled.div`
  padding-top: 60px;
  width: 100%;
  background: url(${starsBg}) 0 0 no-repeat;
  background-size: 1308px auto;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: start;
`;

const Eye = styled.img`
  margin: 5px 16px 0 0;
  width: 30px;

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
  min-width: 300px;
  position: relative;
  left: 0;

  @media (min-width: 1080px) {
    left: -170px;
  }

  @media (min-width: 1260px) {
    left: -100px;
  }

  @media (min-width: 1500px) {
    left: 0;
  }
`;

const BulletOne = styled(Bullet)`
  display: flex;
  margin-top: 130px;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 1080px) {
    margin-left: 145px;
  }
`;

const BulletTwo = styled(Bullet)`
  display: flex;
  margin-top: 60px;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 1080px) {
    margin-top: -100px;
    margin-left: 760px;
  }

  @media (min-width: 1260px) {
    margin-top: 23px;
    margin-left: 860px;
  }

  @media (min-width: 1400px) {
    margin-top: 43px;
    margin-left: 940px;
  }
`;

const BulletThree = styled(Bullet)`
  display: flex;
  margin-top: 60px;
  padding-bottom: 110px;
  font-size: 16px;
  line-height: 22px;
  text-align: right;

  @media (min-width: 1080px) {
    margin-top: 0;
    margin-left: 245px;
  }

  @media (min-width: 1260px) {
    margin-top: 27px;
    margin-left: 145px;
  }

  @media (min-width: 1400px) {
    margin-top: 77px;
    margin-left: 245px;
  }
`;

const BulletText = styled.div`
  width: 50vw;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 1080px) {
    width: 200px;
  }

  @media (min-width: 1260px) {
    width: 277px;
  }
`;

const Lathe = styled.img`
  position: relative;
  top: -30px;
  width: 133px;
  height: auto;
`;

const Lathe2 = styled.img`
  position: relative;
  top: -50px;
  left: -20px;
  width: 66px;
  height: 69px;
`;

const WeirdoWire = styled.img`
  position: relative;
  top: -80px;
  width: 215px;
  height: auto;
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
        <Lathe src={lathe} alt="" />
        <BulletText>
          <strong>Be the NFT Alchemist&mdash;</strong>
          <p>
            The possibilities are endless in the realms that you can imagine.
            What would you do with that power?
          </p>
        </BulletText>
      </BulletOne>

      <BulletTwo>
        <Lathe2 src={lathe2} alt="" />
        <BulletText>
          <strong>Be the NFT Alchemist&mdash;</strong>
          <p>
            The possibilities are endless in the realms that you can imagine.
            What would you do with that power?
          </p>
        </BulletText>
      </BulletTwo>

      <BulletThree>
        <BulletText>
          <strong>Be the NFT Alchemist&mdash;</strong>
          <p>
            The possibilities are endless in the realms that you can imagine.
            What would you do with that power?
          </p>
        </BulletText>
        <WeirdoWire src={weirdoWire} alt="" />
      </BulletThree>
    </InnerBackground>
  </Container>
);

export default WhatIsHyperVibes;
