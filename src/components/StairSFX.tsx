import { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  isSoundOn: boolean;
}

const Stair = styled.div`
  position: absolute;
`;

const StairOne = styled(Stair)`
  position: absolute;
  top: 50%;
  left: 30%;
  width: 28%;
  height: 5%;
`;

const StairTwo = styled(Stair)`
  position: absolute;
  top: 42%;
  left: 32%;
  width: 16%;
  height: 5%;
`;

const StairThree = styled(Stair)`
  position: absolute;
  top: 35%;
  left: 34%;
  width: 17%;
  height: 4%;
`;

const StairFour = styled(Stair)`
  position: absolute;
  top: 30%;
  left: 40%;
  width: 15%;
  height: 4%;
`;

const StairFive = styled(Stair)`
  position: absolute;
  top: 25.5%;
  left: 47%;
  width: 13%;
  height: 4%;
`;

const StairSix = styled(Stair)`
  position: absolute;
  top: 21%;
  left: 53%;
  width: 12%;
  height: 3.5%;
`;

const StairSeven = styled(Stair)`
  position: absolute;
  top: 16%;
  left: 57%;
  width: 13%;
  height: 4%;
`;

const StairEight = styled(Stair)`
  position: absolute;
  top: 10%;
  left: 64%;
  width: 13%;
  height: 5.75%;
`;

export const StairSFX = ({ isSoundOn }: Props) => {
  const stairOneSound = useRef<HTMLAudioElement>(null);
  const stairTwoSound = useRef<HTMLAudioElement>(null);
  const stairThreeSound = useRef<HTMLAudioElement>(null);
  const stairFourSound = useRef<HTMLAudioElement>(null);
  const stairFiveSound = useRef<HTMLAudioElement>(null);
  const stairSixSound = useRef<HTMLAudioElement>(null);
  const stairSevenSound = useRef<HTMLAudioElement>(null);
  const stairEightSound = useRef<HTMLAudioElement>(null);

  return (
    <>
      <StairOne
        onMouseEnter={() => {
          if (isSoundOn && stairOneSound.current) {
            stairOneSound.current.currentTime = 0;
            stairOneSound.current?.play();
          }
        }}
      />
      <StairTwo
        onMouseEnter={() => {
          if (isSoundOn && stairTwoSound.current) {
            stairTwoSound.current.currentTime = 0;
            stairTwoSound.current?.play();
          }
        }}
      />
      <StairThree
        onMouseEnter={() => {
          if (isSoundOn && stairThreeSound.current) {
            stairThreeSound.current.currentTime = 0;
            stairThreeSound.current?.play();
          }
        }}
      />
      <StairFour
        onMouseEnter={() => {
          if (isSoundOn && stairFourSound.current) {
            stairFourSound.current.currentTime = 0;
            stairFourSound.current?.play();
          }
        }}
      />
      <StairFive
        onMouseEnter={() => {
          if (isSoundOn && stairFiveSound.current) {
            stairFiveSound.current.currentTime = 0;
            stairFiveSound.current?.play();
          }
        }}
      />
      <StairSix
        onMouseEnter={() => {
          if (isSoundOn && stairSixSound.current) {
            stairSixSound.current.currentTime = 0;
            stairSixSound.current?.play();
          }
        }}
      />
      <StairSeven
        onMouseEnter={() => {
          if (isSoundOn && stairSevenSound.current) {
            stairSevenSound.current.currentTime = 0;
            stairSevenSound.current?.play();
          }
        }}
      />
      <StairEight
        onMouseEnter={() => {
          if (isSoundOn && stairEightSound.current) {
            stairEightSound.current.currentTime = 0;
            stairEightSound.current?.play();
          }
        }}
      />

      <audio ref={stairOneSound} preload="auto">
        <source src="./stair-1.mp3" type="audio/mpeg" />
      </audio>

      <audio ref={stairTwoSound} preload="auto">
        <source src="./stair-2.mp3" type="audio/mpeg" />
      </audio>

      <audio ref={stairThreeSound} preload="auto">
        <source src="./stair-3.mp3" type="audio/mpeg" />
      </audio>

      <audio ref={stairFourSound} preload="auto">
        <source src="./stair-4.mp3" type="audio/mpeg" />
      </audio>

      <audio ref={stairFiveSound} preload="auto">
        <source src="./stair-5.mp3" type="audio/mpeg" />
      </audio>

      <audio ref={stairSixSound} preload="auto">
        <source src="./stair-6.mp3" type="audio/mpeg" />
      </audio>

      <audio ref={stairSevenSound} preload="auto">
        <source src="./stair-7.mp3" type="audio/mpeg" />
      </audio>

      <audio ref={stairEightSound} preload="auto">
        <source src="./stair-7.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};
