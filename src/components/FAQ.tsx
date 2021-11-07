import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
// @ts-ignore
import heading from '../assets/images/headings/faq.svg';
// @ts-ignore
import lightbulb from '../assets/images/lightbulb.png';

const questions = [
  {
    question: 'This is an example of a question?',
    answer: 'This is an an example of an answer.',
  },
  {
    question: 'This is an example of a question?',
    answer: 'This is an an example of an answer.',
  },
  {
    question: 'This is an example of a question?',
    answer: 'This is an an example of an answer.',
  },
  {
    question: 'This is an example of a question?',
    answer: 'This is an an example of an answer.',
  },
  {
    question: 'This is an example of a question?',
    answer: 'This is an an example of an answer.',
  },
  {
    question: 'This is an example of a question?',
    answer: 'This is an an example of an answer.',
  },
  {
    question: 'This is an example of a question?',
    answer: 'This is an an example of an answer.',
  },
  {
    question: 'This is an example of a question?',
    answer: 'This is an an example of an answer.',
  },
];

const Container = styled.div`
  padding-top: 110px;
  padding-left: 145px;
  width: 100%;
  background: #090909;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 35px;
`;

const Heading = styled.img``;

const Lightbulb = styled.img`
  position: relative;
  top: -15px;
  margin-right: 32px;
  width: 35px;
  height: auto;
`;

const Questions = styled.div`
  padding-left: 65px;
`;

const Item = styled.div`
  padding: 40px 0;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid #17ffe3;
  transition: color 0.2s;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const Question = styled.div<{ isExpanded: boolean }>`
  margin-left: ${({ isExpanded }) => (isExpanded ? '105px' : 0)};
  margin-bottom: ${({ isExpanded }) => (isExpanded ? '32px' : 0)};
  transition: all 0.2s;
`;

const Answer = styled.div<{ isExpanded: boolean }>`
  margin-left: ${({ isExpanded }) => (isExpanded ? '105px' : 0)};
  transform: ${({ isExpanded }) => (isExpanded ? 'scaleX(1)' : 'scaleX(0)')};
  position: ${({ isExpanded }) => (isExpanded ? 'static' : 'absolute')};
  transform-origin: center left;
  transition: all 0.2s;
  color: #bcff67;
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
    <Container>
      <HeadingContainer>
        <div>
          <Lightbulb src={lightbulb} alt="" />
        </div>
        <Heading src={heading} alt="FAQ" />
      </HeadingContainer>

      <Questions>
        {questions.map((item, index) => (
          <Item key={index} onClick={() => toggle(index)}>
            <Question isExpanded={expandedItem === index}>
              {item.question}
            </Question>
            <Answer isExpanded={expandedItem === index}>{item.answer}</Answer>
          </Item>
        ))}
      </Questions>
    </Container>
  );
};

export default FAQ;
