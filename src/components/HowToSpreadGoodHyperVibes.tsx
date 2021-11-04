import styled from 'styled-components';
import heading from '../assets/images/headings/how-to-spread-good-hypervibes.svg';
import glacier from '../assets/images/glacier.png';
import circlesBg from '../assets/images/circles-bg.png';
import starsBg from '../assets/images/stars-bg.png';
import decentralizedCuration from '../assets/images/decentralized-curation.png';
import tokenDistribution from '../assets/images/token-distribution.png';
import governanceXNft from '../assets/images/governance-x-nft.png';

const Container = styled.div`
  margin-top: -90px;
  padding-top: 90px;
  padding-left: 90px;
  width: 100%;
  min-height: 100vh;
  background: url(${circlesBg}) 0 0 no-repeat;
  background-size: 800px auto;
  background-position: 200px 240px;

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
  width: 50px;
`;

const Heading = styled.img``;

const Bullets = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  padding-bottom: 270px;
`;

const BulletOne = styled.div`
  margin-top: 70px;
  font-size: 16px;
  line-height: 22px;
  margin-right: 90px;
`;

const BulletTwo = styled.div`
  margin-top: 70px;
  width: 277px;
  font-size: 16px;
  line-height: 22px;
  margin-right: 90px;
`;

const BulletThree = styled.div`
  margin-top: 70px;
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

const Image = styled.img`
  position: relative;
  top: 10px;
  width: 280px;
  height: auto;
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
        <BulletOne>
          <Image src={decentralizedCuration} alt="" />
          <BulletText>
            <BulletTitle>Decentralized Art Curation</BulletTitle>
            <p>
              Give curators the ability to infuse any NFT with a curatorial
              token that can be mined by collectors, rewarding those who buy and
              sell art with the ability to influence the network.
            </p>
          </BulletText>
        </BulletOne>

        <BulletTwo>
          <Image src={tokenDistribution} alt="" />
          <BulletText>
            <BulletTitle>Social Token Distribution</BulletTitle>
            <p>
              Distribute an artist token in a way that incentivizes holding art
              over time. This creates a network of dynamic portals that stream a
              social token to the community via NFTs.
            </p>
          </BulletText>
        </BulletTwo>

        <BulletThree>
          <Image src={governanceXNft} alt="" />
          <BulletText>
            <BulletTitle>Collectible and Gaming Projects</BulletTitle>
            <p>
              Infuse NFTs with in-game resource tokens that can be claimed by
              the owner. Release a collectible project that infuses every NFT on
              mint with a community governance token.
            </p>
          </BulletText>
        </BulletThree>
      </Bullets>
    </InnerBackground>
  </Container>
);

export default HowToSpreadGoodHyperVibes;
