import styled from 'styled-components';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import heading from '../assets/images/headings/how-to-spread-good-hypervibes.svg';
import glacier from '../assets/images/glacier.png';
import starsBg from '../assets/images/stars-bg.png';
import decentralizedCuration from '../assets/images/decentralized-curation.png';
import tokenDistribution from '../assets/images/token-distribution.png';
import governanceXNft from '../assets/images/governance-x-nft.png';
import { float } from '../styles/animations';

const Container = styled.div`
  margin-top: 0;
  padding-top: 60px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  min-height: 100vh;
  background-size: 800px auto;
  background-position: 200px 240px;

  @media (min-width: 650px) {
    padding-top: 40px;
  }

  @media (min-width: 880px) {
    padding-top: 65px;
    padding-left: 90px;
    padding-right: 0;
  }

  @media (min-width: 1080px) {
    padding-top: 90px;
    padding-left: 145px;
  }

  @media (min-width: 1260px) {
    background-size: 904px auto;
    background-position: 200px 260px;
  }

  @media (min-width: 1400px) {
    background-size: 1004px auto;
  }

  @media (min-width: 1500px) {
    background-position: 300px 290px;
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
  min-height: 100vh;
  background: url(${starsBg}) 0 0 no-repeat;
  background-size: cover;

  @media (min-width: 650px) {
    background-size: 1308px auto;
  }
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
  margin-left: 40px;
  padding-bottom: 270px;
  margin-top: 0;

  @media (min-width: 650px) {
    margin-top: 70px;
    margin-left: 0;
  }

  @media (min-width: 880px) {
    margin-left: -30px;
  }

  @media (min-width: 1080px) {
    margin-top: 0;
    flex-direction: row;
  }

  @media (min-width: 1260px) {
    margin-left: 0;
  }

  @media (min-width: 1500px) {
    margin-left: 80px;
  }
`;

const Bullet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-right: 145px;
  margin-left: -25px;
  width: 100%;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 650px) {
    margin-top: -40px;
    margin-left: 0;
  }

  @media (min-width: 1080px) {
    flex-direction: column;
    margin-top: 70px;
    margin-right: 80px;
    width: 260px;
  }

  @media (min-width: 1400px) {
    margin-right: 145px;
    width: auto;
  }
`;

const BulletText = styled.div`
  margin-left: 0;
  width: auto;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 880px) {
    margin-left: 40px;
    width: 55vw;
  }

  @media (min-width: 1080px) {
    width: 277px;
  }
`;

const BulletTitle = styled.div`
  font-family: '3616 Grammastile', sans-serif;
  font-size: 8px;
  line-height: 16px;
  color: #17ffe3;
`;

const Image = styled.img<{ animationDelay: number }>`
  position: relative;
  top: 10px;
  width: 150px;
  height: 150px;
  margin-left: 20px;
  object-fit: contain;
  animation: ${float} 5s ease-in-out infinite;
  animation-delay: ${({ animationDelay }) => animationDelay}s;
  display: none;

  @media (min-width: 650px) {
    margin-left: 0;
    width: 220px;
    height: 280px;
    display: inline;
  }

  @media (min-width: 1260px) {
    width: 280px;
    height: 280px;
  }
`;

const HowToSpreadGoodHyperVibes = () => (
  <Container id="how-to">
    <InnerBackground>
      <Fade up>
        <HeadingContainer>
          <div>
            <Glacier src={glacier} alt="" />
          </div>
          <Heading src={heading} alt="What is HyperVIBES?" />
        </HeadingContainer>
      </Fade>

      <Bullets>
        <Fade up>
          <Bullet>
            <Image src={decentralizedCuration} animationDelay={0} alt="" />
            <BulletText>
              <BulletTitle>Decentralized Art Curation</BulletTitle>
              <p>
                Give curators the ability to infuse any NFT with a curatorial
                token that can be mined by collectors, rewarding those who buy
                and sell art with the ability to influence the network.
              </p>
            </BulletText>
          </Bullet>
        </Fade>

        <Fade up delay={400}>
          <Bullet>
            <Image src={tokenDistribution} animationDelay={2} alt="" />
            <BulletText>
              <BulletTitle>Social Token Distribution</BulletTitle>
              <p>
                Distribute an artist token in a way that incentivizes holding
                art over time and create a network of dynamic portals that
                stream a social token to the community via NFTs.
              </p>
            </BulletText>
          </Bullet>
        </Fade>

        <Fade up delay={200}>
          <Bullet>
            <Image src={governanceXNft} animationDelay={1} alt="" />
            <BulletText>
              <BulletTitle>Collectibles and Gaming</BulletTitle>
              <p>
                Infuse NFTs with in-game resource tokens that can be claimed by
                the owner. Release a collectible project that infuses every NFT
                on mint with a community governance token.
              </p>
            </BulletText>
          </Bullet>
        </Fade>
      </Bullets>
    </InnerBackground>
  </Container>
);

export default HowToSpreadGoodHyperVibes;
