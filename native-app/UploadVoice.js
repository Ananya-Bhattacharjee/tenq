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
 

 async function upload(surveyId, questionId){
    for (var i = 0; i<7; i++){
    var xhr = new XMLHttpRequest();
    
    let fd = new FormData();
    let filename = RNFS.DocumentDirectoryPath + '/hello.m4a';
    audioBlob= GetFileBlobUsingURL(filename)
    fd.append("content", audioBlob, filename);
    fd.append("questionId", questionId);
    fd.append("surveyId", surveyId);

    xhr.open("POST", "/apis/voice", true);
    xhr.send(fd);

    //setAlert("uploading");
    }
//https://stackoverflow.com/questions/55611443/create-file-object-using-file-path
    var GetFileBlobUsingURL = function (url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.addEventListener('load', function() {
            blob = new Blob(xhr.response)
            console.log(blob)
        });
        xhr.send();
};

// var blobToFile = function (blob, name) {
//         blob.lastModifiedDate = new Date();
//         blob.name = name;
//         return blob;
// };

// var GetFileObjectFromURL = function(filePathOrUrl, convertBlob) {
//        GetFileBlobUsingURL(filePathOrUrl, function (blob) {
//           convertBlob(blobToFile(blob, 'testFile.jpg'));
//        });
// };
// var FileURL="test/test.jpg"
// GetFileObjectFromURL(FileURL, function (fileObject) {
//      console.log(fileObject);
// });
  }

  export default upload;