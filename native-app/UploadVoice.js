import React from 'react';

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
 } from 'react-native';
 import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel,} from 'react-native-simple-radio-button';
 import styles from './styles';
 import { get_responses } from './getUserInfo';
 import { AsyncStorage } from 'react-native';
 

 async function upload(){
    for (var i = 0; i<7; i++){
    var xhr = new XMLHttpRequest();
    
    let fd = new FormData();
    let filename = RNFS.DocumentDirectoryPath + '/q1.m4a';
    fd.append("voice", audioBlob, filename);
    fd.append("projectName", `${props.project}`);
    fd.append("participantName", props.student.name);
    fd.append("identifier", `${props.student.name}-${props.project}`);


    xhr.open("POST", "/apis/voice", true);
    xhr.send(fd);

    //setAlert("uploading");
    }
  }