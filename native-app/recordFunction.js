import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,  
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType,
   } from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.01);

export async function onStartPlay (e) {
    console.log('onStartPlay');
    const RNFS = require('react-native-fs');
    const path = RNFS.DocumentDirectoryPath + '/hello.m4a'; 
    //const path = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";      
    const msg = await audioRecorderPlayer.startPlayer(path);
    //const msg = await audioRecorderPlayer.startPlayer();
    audioRecorderPlayer.setVolume(1.0);
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.currentPosition === e.duration) {
        console.log('finished');
        audioRecorderPlayer.stopPlayer(path);
        audioRecorderPlayer.removePlayBackListener();
      }
      console.log('Playing . . . ', e.currentPosition);
      changeDefaultState({
        recordSecs:'00:00:00',
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };

export async function onPausePlay (e) { 
    //const audio = await audioRecorderPlayer.stopRecorder();
    //audioRecorderPlayer.removeRecordBackListener();
    const RNFS = require('react-native-fs');
    const path = RNFS.DocumentDirectoryPath + '/hello.m4a'; 

    await audioRecorderPlayer.pausePlayer(path);
 };

export async function onStopPlay  (e) {
  console.log('onStopPlay');
  const RNFS = require('react-native-fs');
  const path = RNFS.DocumentDirectoryPath + '/hello.m4a'; 

  const audio = await audioRecorderPlayer.stopPlayer(path);
  //audioRecorderPlayer.stopPlayer();
  audioRecorderPlayer.removePlayBackListener();
};
