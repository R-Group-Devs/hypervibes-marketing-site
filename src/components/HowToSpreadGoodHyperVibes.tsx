import styled from 'styled-components';
import heading from '../assets/images/headings/how-to-spread-good-hypervibes.svg';
import glacier from '../assets/images/glacier.png';
import circlesBg from '../assets/images/circles-bg.png';
import starsBg from '../assets/images/stars-bg.png';
import decentralizedCuration from '../assets/images/decentralized-curation.png';
import tokenDistribution from '../assets/images/token-distribution.png';
import governanceXNft from '../assets/images/governance-x-nft.png';

const Container = styled.div`
  margin-top: 0;
  padding-top: 90px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  min-height: 100vh;
  background: url(${circlesBg}) 0 0 no-repeat;
  background-size: 800px auto;
  background-position: 200px 240px;

  @media (min-width: 650px) {
    margin-top: -90px;
  }

  @media (min-width: 880px) {
    padding-left: 90px;
    padding-right: 0;
  }

  @media (min-width: 1080px) {
    padding-left: 145px;
  }

  @media (min-width: 1260px) {
    background-size: 904px auto;
    background-position: 200px 210px;
  }

  @media (min-width: 1400px) {
    background-size: 1004px auto;
  }

  @media (min-width: 1500px) {
    background-position: 300px 290px;
  }
`;

const InnerBackground = styled.div`
  padding-top: 60px;
  width: 100%;
  min-height: 100vh;
  background: url(${starsBg}) 0 0 no-repeat;
  background-size: 1308px auto;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: start;
`;

const Glacier = styled.img`
  margin: -15px 30px 0 0;
  width: 42px;

  @media (min-width: 650px) {
    width: 50px;
  }
`;

const Heading = styled.img`
  margin-bottom: 30px;
  width: 248px;

  @media (min-width: 650px) {
    margin-bottom: 0;
    width: 347px;
  }

  @media (min-width: 880px) {
    width: auto;
  }
`;

const Bullets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0px;
  padding-bottom: 270px;

  @media (min-width: 1080px) {
    flex-direction: row;
  }

  @media (min-width: 1260px) {
    margin-left: 80px;
  }
`;

const Bullet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-right: 90px;
  margin-left: 90px;
  width: 100%;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 550px) {
    margin-left: 0;
  }

  @media (min-width: 1080px) {
    flex-direction: column;
    margin-top: 70px;
    width: auto;
  }
`;

const BulletText = styled.div`
  width: auto;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 1080px) {
    width: 225px;
  }

  @media (min-width: 1260px) {
    width: 277px;
  }
`;

const BulletTitle = styled.div`
  font-family: '3616 Grammastile', sans-serif;
  font-size: 8px;
  color: #17ffe3;
`;

const Image = styled.img`
  position: relative;
  top: 10px;
  width: 150px;
  height: 150px;
  margin-left: 20px;
  display: none;

  @media (min-width: 550px) {
    display: inline;
  }

  @media (min-width: 650px) {
    margin-left: 0;
    width: 220px;
    height: 280px;
  }

  @media (min-width: 1260px) {
    width: 280px;
    height: 280px;
  }
`;

const HowToSpreadGoodHyperVibes = () => (
  <Container id="how-to">
    <InnerBackground>
      <HeadingContainer>
        <div>
          <Glacier src={glacier} alt="" />
        </div>
        <Heading src={heading} alt="What is HyperVIBES?" />
      </HeadingContainer>

      <Bullets>
        <Bullet>
          <Image src={decentralizedCuration} alt="" />
          <BulletText>
            <BulletTitle>Decentralized Art Curation</BulletTitle>
            <p>
              Give curators the ability to infuse any NFT with a curatorial
              token that can be mined by collectors, rewarding those who buy and
              sell art with the ability to influence the network.
            </p>
          </BulletText>
        </Bullet>

        <Bullet>
          <Image src={tokenDistribution} alt="" />
          <BulletText>
            <BulletTitle>Social Token Distribution</BulletTitle>
            <p>
              Distribute an artist token in a way that incentivizes holding art
              over time. This creates a network of dynamic portals that stream a
              social token to the community via NFTs.
            </p>
          </BulletText>
        </Bullet>

        <Bullet>
          <Image src={governanceXNft} alt="" />
          <BulletText>
            <BulletTitle>Collectible and Gaming Projects</BulletTitle>
            <p>
              Infuse NFTs with in-game resource tokens that can be claimed by
              the owner. Release a collectible project that infuses every NFT on
              mint with a community governance token.
            </p>
          </BulletText>
        </Bullet>
      </Bullets>
    </InnerBackground>
  </Container>
);

export default HowToSpreadGoodHyperVibes;
