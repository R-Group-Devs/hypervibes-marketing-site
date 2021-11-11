import { useState, useCallback } from 'react';
import styled from 'styled-components';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import heading from '../assets/images/headings/faq.svg';
import lightbulb from '../assets/images/lightbulb.png';
import answerIcon from '../assets/images/icons/answer.svg';
import faqTile from '../assets/images/faq-tile.svg';

const questions = [
  {
    question: 'What is provenance mining?',
    answer:
      'Provenance mining is a mechanism that allows an NFT to mine tokens over time which the owner of the NFT can claim. Unclaimed tokens stay within the NFT across sales or transfers.',
  },
  {
    question: 'What is a realm?',
    answer:
      'A HyperVIBES realm is an isolated environment with a specific ERC-20 token and various configuration options. Anybody is free to create a realm for their own experiments, protocols, and projects.',
  },
  {
    question: 'How do I create a realm?',
    answer: (
      <>
        The <strong>HyperVIBES dApp</strong> (coming soon) can be used to
        create, view, and manage realms. You can also programmatically create
        realms directly from the smart contract by invoking the{' '}
        <strong>createRealm</strong> function.
      </>
    ),
  },
  {
    question: 'How do I integrate HyperVIBES into my protocol?',
    answer: (
      <>
        You can use HyperVIBES with any ERC-721 and ERC-20 token without having
        to write any code or deploy a contract by using the{' '}
        <strong>HyperVIBES dApp</strong> (coming soon) to manage realms, infuse
        NFTs, and claim tokens.
        <br />
        <br />
        More direct integrations can be built by directly invoking the
        HyperVIBES smart contract from your protocol.
      </>
    ),
  },
  {
    question: 'How can I infuse an NFT?',
    answer: (
      <>
        You can view all realms that you are allowed to infuse within the{' '}
        <strong>HyperVIBES dApp</strong> (coming soon). After selecting a
        specific realm, you can then choose to infuse NFTs based on the
        constraints and realm configuration.
      </>
    ),
  },
  {
    question: 'How do I claim infused tokens?',
    answer: (
      <>
        You can view all realms that you can claim tokens from in the{' '}
        <strong>HyperVIBES dApp</strong> (coming soon). After selecting a
        specific realm, you can then browse the NFTs you own with claimable
        tokens.
      </>
    ),
  },
  {
    question: 'What NFTs can I infuse via HyperVIBES?',
    answer: (
      <>
        Any ERC-721 NFTs can be infused via the protocol, depending on realm
        configuration. ERC-1155s cannot be infused.
        <br />
        <br />
        HyperVIBES is not a minting platform, it was designed to allow infusing
        tokens into NFTs minted on any platform.
      </>
    ),
  },
  {
    question: 'What tokens can I infuse via HyperVIBES?',
    answer: (
      <>
        Any ERC-20 tokens can be used with HyperVIBES. Each realm is configured
        with a single token.
      </>
    ),
  },
  {
    question: 'How can I contribute?',
    answer: (
      <>
        Hang out in the{' '}
        <a href="https://discord.gg/ZtZqH7nfgG">Rarible DAO Discord</a>! We're
        working to make a habit of shipping fun and highly-composable
        decentralized software like HyperVIBES. Check out the{' '}
        <a href="https://docs.hypervibes.xyz">HyperVIBES documentation</a> for
        more in-depth information.
      </>
    ),
  },
];

const Container = styled.div`
  margin-top: -290px;
  padding-top: 150px;
  padding-right: 40px;
  padding-bottom: 100px;
  padding-left: 40px;
  width: 100%;
  background: #090909;
  background: linear-gradient(transparent 0%, #090909 40%);
  overflow-x: hidden;

  @media (min-width: 650px) {
    margin-top: -280px;
  }

  @media (min-width: 880px) {
    padding-left: 90px;
    padding-right: 0;
    padding-bottom: 150px;
  }

  @media (min-width: 1080px) {
    padding-left: 145px;
    margin-top: -150px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 0;

  @media (min-width: 650px) {
    margin-bottom: 35px;
  }
`;

const Heading = styled.img`
  width: 642px;

  @media (min-width: 650px) {
    width: 890px;
  }

  @media (min-width: 880px) {
    width: auto;
  }
`;

const FaqTile = styled.div`
  margin-left: 22px;
  background: url(${faqTile}) 0 0 repeat-x;
  background-size: 198px 42px;
  width: 100%;
  height: 60px;
`;

const Lightbulb = styled.img`
  position: relative;
  margin-right: 32px;
  top: -5px;
  width: 20px;
  height: auto;

  @media (min-width: 650px) {
    top: -8px;
    width: 25px;
  }

  @media (min-width: 880px) {
    top: -15px;
    width: 35px;
  }
`;

const Questions = styled.div`
  padding-left: 0;

  @media (min-width: 880px) {
    padding-left: 65px;
  }
`;

const Item = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid #17ffe3;
  transition: color 0.2s;
  overflow: hidden;

  @media (min-width: 650px) {
    font-size: 20px;
  }
`;

const Question = styled.div<{ isExpanded: boolean }>`
  padding: 40px 0;
  padding-bottom: ${({ isExpanded }) => (isExpanded ? '32px' : '40px')};
  transition: margin-left 0.2s, color 0.2s;

  @media (min-width: 880px) {
    margin-left: ${({ isExpanded }) => (isExpanded ? '105px' : 0)};
  }

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const Answer = styled.div<{ isExpanded: boolean }>`
  display: flex;
  align-items: start;
  padding-bottom: ${({ isExpanded }) => (isExpanded ? '40px' : 0)};
  padding-right: 40px;
  max-width: 780px;
  transform: ${({ isExpanded }) => (isExpanded ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: center left;
  transition: transform 0.2s, margin-left 0.2s;
  font-size: 16px;
  line-height: 22px;
  color: #bcff67;

  @media (min-width: 880px) {
    margin-left: ${({ isExpanded }) => (isExpanded ? '63px' : 0)};
  }

  a:hover {
    text-decoration: underline;
    border-bottom: 0;
  }
`;

const AnswerIcon = styled.img`
  margin-top: 5px;
  margin-right: 32px;
`;

const FAQ = () => {
  const [expandedItem, setExpandedItem] = useState<number>();

  const toggle = useCallback(
    (index: number) => {
      if (index === expandedItem) {
        setExpandedItem(undefined);
      } else {
        setExpandedItem(index);
      }
    },
    [expandedItem, setExpandedItem]
  );

  return (
    <Container id="faq">
      <Fade up>
        <HeadingContainer>
          <div>
            <Lightbulb src={lightbulb} alt="" />
          </div>
          <Heading src={heading} alt="FAQ" />
          <FaqTile />
        </HeadingContainer>
      </Fade>

      <Questions>
        {questions.map((item, index) => (
          <Item key={index}>
            <Question
              isExpanded={expandedItem === index}
              onClick={() => toggle(index)}
            >
              {item.question}
            </Question>
            <Answer isExpanded={expandedItem === index}>
              {expandedItem === index && (
                <>
                  <AnswerIcon src={answerIcon} alt="" />
                  <span>{item.answer}</span>
                </>
              )}
            </Answer>
          </Item>
        ))}
      </Questions>
    </Container>
  );
};

export default FAQ;
