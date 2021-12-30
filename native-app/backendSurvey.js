var RNFS = require('react-native-fs');
 var path = RNFS.DocumentDirectoryPath + '/test.txt';

 // write the file
 RNFS.writeFile(path, text, 'utf8')
 .then((success) => {
  console.log('FILE WRITTEN!');
 })
 .catch((err) => {
  console.log(err.message);
 });