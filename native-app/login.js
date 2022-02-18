export default function checkCred() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        // var jsonObj = new JSONObject(request.responseText);
        // var message = jsonObj.getString("message");
        
        
        
      }
    }
    //var url ='localhost:11221/login/';
    var url = 'https://tenq.chenpan.ca/login/';
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json');
    const obj = {"username":global.username, "password":global.password}
    const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
    request.send(blob);
    // write value to file
  };