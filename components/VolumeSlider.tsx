import { useState, useEffect } from 'react';

interface VolumeSliderProps {
  audio: HTMLAudioElement | null;
}

export default function VolumeSlider({ audio }: VolumeSliderProps) {
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (audio) {
      console.log('Audio element:', audio); // Debugging
      console.log('Audio readyState:', audio.readyState); // Debugging

      const handleAudioReady = () => {
        audio.volume = volume;
      };

      audio.addEventListener('canplay', handleAudioReady);

      if (audio.readyState >= 3) {
        handleAudioReady();
      }

      return () => {
        audio.removeEventListener('canplay', handleAudioReady);
      };
    }
  }, [audio, volume]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audio) {
      audio.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg border border-white/20">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-24 h-2 appearance-none rounded-full bg-[#ff2e2e]/20 outline-none cursor-pointer
                 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#ff2e2e] 
                 [&::-webkit-slider-thumb]:hover:bg-[#d62222] [&::-webkit-slider-thumb]:transition-colors"
      />
    </div>
  );
}
