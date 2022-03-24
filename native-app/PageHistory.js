import React, { useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View, FlatList} from "react-native";
import  {Picker} from '@react-native-picker/picker'
import checkCred from './login.js'
function getUser(){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      // var jsonObj = new JSONObject(request.responseText);
      // var message = jsonObj.getString("message");
      let obj = JSON.parse(request.response)
      global.surveys = obj["data"]["surveyIds"]
      //console.log(global.surveys)
    }
  }
  var url = 'https://tenq.chenpan.ca/user/';
  request.open('GET', url);
  const obj = {}
  request.setRequestHeader('Content-Type', 'application/json');
    
  const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
  request.send(blob);
}
function parseSurveys(list_a){
  let ret_lst = []
  
  for (var id in list_a){
    console.log(global.view_survey[list_a[id]]["date"])
    ret_lst.push({key: global.view_survey[list_a[id]]["date"], value: list_a[id]})
  }
  return ret_lst;
}


export default function PageHistory({navigation}){
  const [new_list, setNewList] = useState([])
  useFocusEffect(
    React.useCallback(() => {
      checkCred();
      getUser();
      
      setNewList(parseSurveys(global.surveys));
      
      //console.log(new_list)
    }, [navigation])
  );

    async function get_response(resid){
      var url = "https://tenq.chenpan.ca/response/" + resid;
      var request2 = new XMLHttpRequest();
      request2.onreadystatechange = function() {
        if (request2.readyState === XMLHttpRequest.DONE) {
          // var jsonObj = new JSONObject(request.responseText);
          // var message = jsonObj.getString("message");
          let data = JSON.parse(request2.response)
          //console.log("logging data")
          //console.log(data)
          //global.view_survey[data["data"]["questionId"]]= data["data"]["content"]
          let temp = r_list
          temp[data["data"]["questionId"]] = data["data"]["content"]
          setRlist(temp)
        }
      }
      request2.open('GET', url);
      const obj = {}
      request2.setRequestHeader('Content-Type', 'application/json');
      const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
      request2.send(blob);
    }
async function get_question(qid){
  var url = "https://tenq.chenpan.ca/question/" + qid;
  var request2 = new XMLHttpRequest();
  //let response_lst = global.view_survey;
  request2.onreadystatechange = function() {
    if (request2.readyState === XMLHttpRequest.DONE) {
      // var jsonObj = new JSONObject(request.responseText);
      // var message = jsonObj.getString("message");
      let data = JSON.parse(request2.response)
      //console.log("logging data")
      //console.log(data)
      //response_lst[qid].push(data["data"]["content"])
      //global.view_survey=response_lst
      //console.log(data["data"]["content"])
      if (data["status_code"]===200){
      //global.question_content[qid]= data["data"]["content"]
      let temp = q_list
      temp[qid] = data["data"]["content"]
      setQlist(temp)
      }
      //global.question_content[qid]= data["data"]["content"]
    }
  }
  request2.open('GET', url);
  const obj = {}
  request2.setRequestHeader('Content-Type', 'application/json');
  const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
  request2.send(blob);
}
async function get_questions(){
  for (var i=0; i<global.qids.length; i++){
    //console.log(global.qids[i])

    await get_question(global.qids[i]);
    //global.view_survey[id].push(ret_data)
  }
}
  async function get_responses(id){
    var request = new XMLHttpRequest();
    request.onreadystatechange = async function() {
      if (request.readyState === XMLHttpRequest.DONE) {
      // var jsonObj = new JSONObject(request.responseText);
      // var message = jsonObj.getString("message");
      //console.log(request.response)
      let obj = JSON.parse(request.response)
      let resIDList = [1,2,3,4,5]
      if(obj['status_code']===200){
        resIDList = obj["data"]["responseIds"]
        //let response_list = []
        let n = resIDList.length;
        for (let i = 0; i < n; i++) {
          //console.log(resIDList)
          var resid = resIDList[i];
          await get_response(resid);
        }
        //get_questions();
      }
    }//console.log(global.surveys)
  }
  var url = 'https://tenq.chenpan.ca/survey/'+id;
  request.open('GET', url);
  const obj = {}
  request.setRequestHeader('Content-Type', 'application/json');
  
  const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
  request.send(blob);
}
    function recordPress(id){
      //console.log("logging id:"+id)
      // global.view_survey = {};
      // global.question_content = {};
      // {"data": }
      // setQlist({})
      // setRlist({})
      // await get_responses(id);
      // await get_questions();
      // console.log("log: global.view_survey")
      // console.log(global.view_survey)
      //global.view_survey=[['1','1'], ['2','2'], ['3','3'], ['4','4'], ['5','5']]
      let ret_lst = []
      for (var i=0; i<global.qids.length; i++){
        let qid = global.qids[i]
        //console.log(global.view_survey[id])
        ret_lst.push([global.question_content[qid], global.view_survey[id][qid]])
      }
      // console.log(r_list)
      // console.log(q_list)
      // setQlist({})
      // setRlist({})
      //console.log(ret_lst)
      navigation.navigate('PageRecord', {"resIDList":ret_lst})
    };
  //testing////////////////
  // const recordPress2 = ({id})=>{
  //   var RandomNumber = Math.floor(Math.random() * 10) + 1 ;
  //   let resID = [];
  //   for (var i = 0; i<=RandomNumber; i++){
  //     resID.push([String(i), String(i)])
  //   }
  //   //let resID = [['1','1'], ['2','2'], ['3','3'], ['4','4'], ['5','5']]
  //   //console.log(resID)
  //   navigation.navigate('PageRecord', {resIDList: resID})
  // }
  //testing/////////////
  // const [q_list, setQlist] = useState({});
  // const [r_list, setRlist] = useState({});
  const [maxList, setMaxList] = useState(10)
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => (prevCount+1)>new_list.length/maxList?prevCount:prevCount+1);
  const onPress2 = () => setCount(prevCount => (prevCount - 1)<=-1?prevCount:prevCount-1);
  let char1="<";
  
// TODO: get response list from API
// TODO: build list navigation buttons
// TODO: connec to Johnny's page 
  return (
    
    <View style={styles.container}>
    <View style={styles.countContainer}>
    <Text style={styles.headingFont}>History</Text>
    </View>
      <View style={styles.container2}>
      <TouchableOpacity style={styles.button2} onPress={onPress2}><Text>{char1}{char1}
      </Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPress2}><Text>{count+1}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2}><Text>{count+2}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPress}><Text>{count+3}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPress}><Text>{">"}{">"}</Text></TouchableOpacity>
        {/* <Picker
        selectedValue={maxList}
        style={styles.button2}
        onValueChange={(itemValue, itemIndex) => setMaxList(itemValue)}
      >
        <Picker.Item  label="5" value="5"/>
        <Picker.Item label="10" value="10" />
        <Picker.Item label="50" value="50" />
      </Picker> */}
      </View>

      <FlatList
        data={new_list.slice(count*maxList, count*maxList+maxList)}
        renderItem={({item}) => <TouchableOpacity style={styles.button} onPress={() =>recordPress(item.value)}><Text>{item.key}</Text></TouchableOpacity>}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    borderColor:"#FF0000",
  },
  containerDropdown: {
    flex: 1,
    justifyContent: "right",
    fontColor:"#FF0000",
    fontSize:7
  },
  container2: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "center",
    paddingTop:-10
    
  },
  button: {
    alignItems: "center",
    borderColor: "#D1DDFF",
    padding: 10,
    borderRadius: 15,
    borderWidth:2,
  
    
    overflow:'hidden'
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#D1DDFF",
    padding: 10,
    borderRadius: 5,
    height:40,
    width:50,
  
    
    overflow:'hidden'
  },
  dropdown: {
    alignItems: "center",
    backgroundColor: "#D1DDFF",
    padding: 10,
    borderRadius: 5,
    height:40,
    width:50,
    borderWidth:0,
    fontSize:10,
    overflow:'hidden'
  },
  
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  headingFont:{
    fontFamily:'normal',
    fontSize:26,
  }
});
