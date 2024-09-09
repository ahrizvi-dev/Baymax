import Tts from 'react-native-tts';

export const initializeTtsListeners = async () => {
  Tts.getInitStatus().then(
    (e) => {
      console.log('All ok TTS ',e);
    },
    error => {
      if (error.code === 'no_engine') {
        console.log('No engine');
        Tts.requestInstallEngine();
      }
    },
  );
};
