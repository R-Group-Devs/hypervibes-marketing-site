import { useState, useCallback } from 'react';
import styled from 'styled-components';
import heading from '../assets/images/headings/faq.svg';
import lightbulb from '../assets/images/lightbulb.png';
import answerIcon from '../assets/images/icons/answer.svg';

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
  margin-top: -150px;
  padding-top: 150px;
  padding-bottom: 150px;
  padding-left: 145px;
  width: 100%;
  background: #090909;
  background: linear-gradient(transparent 0%, #090909 40%);
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
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid #17ffe3;
  transition: color 0.2s;
  overflow: hidden;
`;

const Question = styled.div<{ isExpanded: boolean }>`
  margin-left: ${({ isExpanded }) => (isExpanded ? '105px' : 0)};
  padding: 40px 0;
  padding-bottom: ${({ isExpanded }) => (isExpanded ? '32px' : '40px')};
  transition: margin-left 0.2s, color 0.2s;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const Answer = styled.div<{ isExpanded: boolean }>`
  display: flex;
  align-items: center;
  margin-left: ${({ isExpanded }) => (isExpanded ? '63px' : 0)};
  padding-bottom: ${({ isExpanded }) => (isExpanded ? '40px' : 0)};
  transform: ${({ isExpanded }) => (isExpanded ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: center left;
  transition: transform 0.2s, margin-left 0.2s;
  font-size: 16px;
  color: #bcff67;
`;

const AnswerIcon = styled.img`
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
      <HeadingContainer>
        <div>
          <Lightbulb src={lightbulb} alt="" />
        </div>
        <Heading src={heading} alt="FAQ" />
      </HeadingContainer>

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
