import { useEffect, useRef } from 'react';

interface Props {
  isSoundOn: boolean;
}

export const BackgroundMusic = ({ isSoundOn }: Props) => {
  const backgroundMusic = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isSoundOn) {
      backgroundMusic.current?.play();
    } else {
      backgroundMusic.current?.pause();
    }
  }, [isSoundOn, backgroundMusic]);

  return (
    <audio ref={backgroundMusic} loop preload="auto">
      <source src="./hypervibes.mp3" type="audio/mpeg" />
    </audio>
  );
};
