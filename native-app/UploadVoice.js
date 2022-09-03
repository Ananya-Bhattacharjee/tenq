import RNFetchBlob from 'react-native-fetch-blob'
 async function upload(surveyId, questionId){
    for (var i = 0; i<1; i++){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      console.log(xhr.readyState)
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response)
      }
    }
    var RNFS = require('react-native-fs');
    let fd = new FormData();
    let filename = RNFS.DocumentDirectoryPath + '/hello.m4a';
    var audioBlob = RNFetchBlob.wrap(filename)
    console.log(audioBlob)
    fd.append("content", audioBlob, filename);
    //fd.append("content", "test");
    fd.append("questionId", questionId);
    fd.append("surveyId", surveyId);

    xhr.open("POST", "https://tenq.chenpan.ca/response/");
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send(fd);
    console.log(fd)
    //setAlert("uploading");
    }
  };
//https://stackoverflow.com/questions/55611443/create-file-object-using-file-path
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
  async function GetFileBlobUsingURL(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener('load', function() {
        blob = new Blob(xhr.response)
        console.log(blob)
        return blob
    });
    xhr.send();
};

const getFile = async (url) => {
  //const img_url = "https://picsum.photos/200/300.jpg";
  let result = await fetch(url);
  console.log(result);
  console.log(await result.blob());
  return result.blob();
}
  export default upload;