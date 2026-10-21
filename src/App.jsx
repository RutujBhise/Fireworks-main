import { useEffect } from 'react';
import { Experience } from './scene/Experience';
import { AudioVisualizer } from './ui/AudioVisualizer';
import { IntroGate } from './ui/IntroGate';
import { ReferenceOverlay } from './ui/ReferenceOverlay';
import { audio } from './audio/AudioDirector';
import { enterExperience, startShow, stopShow } from './state/showController';
import { showStore } from './state/showStore';
import { sharedUniforms } from './scene/shared/uniforms';
import { WALLPAPER } from './config';

const SILENT = WALLPAPER.enabled && !WALLPAPER.music;

if (import.meta.env.DEV) window.__show = { enterExperience, startShow, stopShow, showStore, audio, sharedUniforms };

export default function App() {
  useEffect(() => {
    if (!SILENT) audio.init(); // start loading the music players right away (silently)
  }, []);

  return (
    <>
      <Experience />
      {!SILENT && <AudioVisualizer />}
      <IntroGate />
      {import.meta.env.DEV && <ReferenceOverlay />}
    </>
  );
}
