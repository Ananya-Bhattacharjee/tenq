/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import { AsyncStorage } from 'react-native';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
   Alert,
   TextInput,
   Image
 } from 'react-native';
 import AudioRecorderPlayer, {
  
   AVEncoderAudioQualityIOSType,  
   AVEncodingOption,
   AudioEncoderAndroidType,
   AudioSet,
   AudioSourceAndroidType,
  } from 'react-native-audio-recorder-player';
import { TouchableOpacity } from 'react-native-gesture-handler';
import upload from './UploadVoice'
  
//  import compose from 'recompose/compose'
// import withState from 'recompose/withState'
// import withProps from 'recompose/withProps'
 import styles from './styles';
//  import MyStack from './stackNavigator';
//  const stackNavigator = MyStack()
 
   
const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.5); //0.01
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  const Page1 = ({navigation}) => {
    const [response1, onChangeText] = React.useState(null);
    
    const [defaultState, changeDefaultState] = useState({
      isLoggingIn: false,
      recordSecs: '00:00:00',
      recordTime: '00:00:00',
      currentPositionSec: 0,
      currentDurationSec: 0,
      playTime: '00:00:00',
      duration: '00:00:00',
    });
      
   


    
/*    const isLoggingIn = false,
    const recordSecs = 0,
    const recordTime = '00:00:00',
    const currentPositionSec = 0,
    const currentDurationSec = 0,
    const playTime = '00:00:00',
    const duration = '00:00:00',
    audioRecorderPlayer = new AudioRecorderPlayer();
    audioRecorderPlayer.setSubscriptionDuration(0.09); // optional. Default is 0.1*/

    
    function retVal() {
      // setRating1(value);
      global.responses["res1"] = response1;
      console.log(global.responses);
      // add response1 in local memory https://www.npmjs.com/package/react-native-fs
      // write value to file
      //AsyncStorage.getItem('r1', (err, result) => {
        //console.log(result);
      //});
      AsyncStorage.setItem(
        'r1',
        response1
      );
      AsyncStorage.setItem(
        'a_to',
        '2'
      );
      AsyncStorage.getItem('r1', (err, result) => {
        console.log(result);
      });
      upload("62980a12f1557cd81abfc95f", "620b1fbb82ce0b169d0db268");
      /*_storeData = async () => {
        try {
          await AsyncStorage.setItem(
            'r1',
            response1
          );
          AsyncStorage.getItem('r1', (err, result) => {
            console.log(result);
          });
        } catch (error) {
          // Error saving data
        }
      };*/
    };
    const onStartRecord = async () => {
      var RNFS = require('react-native-fs');
      //const path = RNFS.ExternalStorageDirectoryPath + '/hello.m4a';
      const path = RNFS.DocumentDirectoryPath + '/hello.m4a';
      //RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
  //.then((success) => {
    //console.log('FILE WRITTEN!');
  //})
      const audioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
      };
      console.log("audioset", audioSet)
      const result = await audioRecorderPlayer.startRecorder(path);
      //const result = await audioRecorderPlayer.startRecorder();
      
      audioRecorderPlayer.addRecordBackListener(e => {
        changeDefaultState({
          isLoggingIn: false,
          recordSecs: audioRecorderPlayer.mmssss(
            Math.floor(e.currentPosition)),
          recordTime: '00:00:00',
          currentPositionSec: 0,
          currentDurationSec: 0,
          playTime: '00:00:00',
          duration: '00:00:00',
        })
        console.log('Recording . . . ', e.currentPosition);
         return;
        });
        console.log(result);
      };

      async function onPauseRecord (e) { 
        //const audio = await audioRecorderPlayer.stopRecorder();
        //audioRecorderPlayer.removeRecordBackListener();
        // const RNFS = require('react-native-fs');
        // const path = RNFS.DocumentDirectoryPath + '/hello.m4a'; 
  
        await audioRecorderPlayer.pauseRecorder();
     };
     async function onResumeRecord (e) { 
      //const audio = await audioRecorderPlayer.stopRecorder();
      //audioRecorderPlayer.removeRecordBackListener();
      // const RNFS = require('react-native-fs');
      // const path = RNFS.DocumentDirectoryPath + '/hello.m4a'; 

      await audioRecorderPlayer.resumeRecorder();
   };
    
     const onStopRecord = async () => {
      const audio = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      };
/*    async function onStartRecord () {
      var RNFS = require('react-native-fs');
      const path = RNFS.DocumentDirectoryPath + '/hello.m4a';
      console.log(path)
      /*AsyncStorage.setItem(
        'r1',
        response1
      );*/

/*      const audioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
      };
      console.log('audioSet', audioSet);
      const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
      audioRecorderPlayer.addRecordBackListener((e) => {
/*      changeDefaultState({
          isLoggingIn: false,
          currentPositionSec: 0,
          currentDurationSec: 0,
          playTime: '00:00:00',
          duration: '00:00:00',
          recordSecs: e.currentPosition,
          recordTime: audioRecorderPlayer.mmssss(
            Math.floor(e.currentPosition),
          ),})*/
//        console.log(defaultState["recordSecs"])
      /*});
      console.log(`uri: ${uri}`);
    };
    async function onStopRecord  ()  {
      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      //changeDefaultState({
        //recordSecs: 0,
      //});
      console.log(result);
    };*/
    async function onStartPlay (e) {
      console.log('onStartPlay');
      const RNFS = require('react-native-fs');
      const path = RNFS.DocumentDirectoryPath + '/hello.m4a';  //q1.m4a
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

    async function onPausePlay (e) { 
      //const audio = await audioRecorderPlayer.stopRecorder();
      //audioRecorderPlayer.removeRecordBackListener();
      const RNFS = require('react-native-fs');
      const path = RNFS.DocumentDirectoryPath + '/hello.m4a'; 

      await audioRecorderPlayer.pausePlayer(path);
   };
   async function onStopPlay  (e) {
    console.log('onStopPlay');
    const RNFS = require('react-native-fs');
    const path = RNFS.DocumentDirectoryPath + '/hello.m4a'; 

    const audio = await audioRecorderPlayer.stopPlayer(path);
    //audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };
  
    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.fixToTextCenter}>
        
        <Text style={styles.title}>
            What's the situation? Feel free to explain it in as much detail as you'd like.
        </Text>
      </View>
      <Separator />
      <View style={styles.fixToTextCenter}>
    
      {/* <TextInput
        multiline={true}
        style={styles.input}
        onChangeText={onChangeText}
        value={response1}
      /> */}
      </View>
      <View style={styles.fixToTextCenter}>
        <Text style={styles.audioTextStyles}>
          Record: {defaultState[`recordSecs`]}
        </Text>
      </View>
      <View style={styles.fixToTextCenter}>
          <Button mode="contained" icon="record" onPress={() => onStartRecord()} title="Record">
            RECORD
        </Button>
        {/* <TouchableOpacity onPress={() => onStartRecord()} title="Record" style={styles.audioButtonStyles}>
        <Image
            source={require('./record_button_nbg.png')}
            style={styles.buttonImageIconStyle}
            />
        </TouchableOpacity> */}
        <Button mode="contained" icon="pause" onPress={() => onPauseRecord()} title="Pause">
            PAUSE
        </Button>
        <Button mode="contained" icon="resume" onPress={() => onResumeRecord()} title="Resume">
            RESUME
        </Button>
        <Button mode="outlined" icon="stop" onPress={() => onStopRecord()} title="Stop">
            STOP 
        </Button>
        {/* <TouchableOpacity onPress={() => onStopRecord()} title="stop" style={styles.audioButtonStyles}>
        <Image
            source={require('./stop_button_nbg_1.png')}
            style={styles.buttonImageIconStyle}
            />
        </TouchableOpacity> */}
        
        
        </View>
        <View style={styles.fixToTextCenter}>
        <Text style={styles.audioTextStyles}>
          Play: {defaultState[`playTime`]}/{defaultState[`duration`]}
        </Text>
      </View>
      <View style={styles.fixToTextCenter}>
      {/* <TouchableOpacity onPress={() => onStartPlay()} title="Start" style={styles.audioButtonStyles}>
        <Image
            source={require('./play_button_nbg.png')}
            style={styles.buttonImageIconStyle}
            />
        </TouchableOpacity> */}
        <Button mode="contained" icon="play" onPress={() => onStartPlay()} title="Play">
            PLAY
        </Button>
          <Button
            icon="pause"
            mode="contained"
            onPress={() => onPausePlay()}
            title="Pause"
          >
            PAUSE
    </Button>
          <Button
            icon="stop"
            mode="outlined"
            onPress={() => onStopPlay()}
            title="Stop"
          >
            STOP
    </Button>


      </View>


      <Separator />
     
      <View>
        
        <View style={styles.fixToText}>
          <Button
            title="Previous"
            onPress={() => {retVal(); navigation.goBack()}}
          />
          <Button
            title="Next"
            onPress={() => {retVal(); navigation.navigate('Page3')}}
          />
        </View>
        
      </View>
    </SafeAreaView>
    );
    };
  
  
  
  export default Page1;
 