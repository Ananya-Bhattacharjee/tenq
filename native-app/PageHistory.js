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
    console.log(list_a[id])
    ret_lst.push({key: list_a[id]})
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
      console.log(new_list)
    }, [navigation])
  );
    const recordPress = ({id})=> {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
      // var jsonObj = new JSONObject(request.responseText);
      // var message = jsonObj.getString("message");
      console.log(request.response)
      let obj = JSON.parse(request.response)
      let resID = [1,2,3,4,5]
      if(obj['status_code']===200){

      resID = obj["data"]["responseIds"]
      }
      navigation.navigate('PageRecord', {"resIDList":resID})
      //console.log(global.surveys)
    }
  }
  console.log(id)
  var url = 'https://tenq.chenpan.ca/survey/'+id;
  request.open('GET', url);
  const obj = {}
  request.setRequestHeader('Content-Type', 'application/json');
    
  const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
  request.send(blob);
    };
  //testing////////////////
  const recordPress2 = ({id})=>{
    let resID = [['1','1'], ['2','2'], ['3','3'], ['4','4'], ['5','5']]
    navigation.navigate('PageRecord', {resIDList: resID})
  }
  //testing/////////////

  const [maxList, setMaxList] = useState(10)
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => (prevCount+1)>new_list.length/maxList?prevCount:prevCount+1);
  const onPress2 = () => setCount(prevCount => (prevCount - 1)<=-1?prevCount:prevCount-1);
  let char1="<";
  
// TODO: get response list from API
// TODO: build list navigation buttons
// TODO: connec to Johnny's page 
  return (
    
    <View style={styles.container} onLayout={checkCred, getUser}>
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
        renderItem={({item}) => <TouchableOpacity style={styles.button} onPress={() => recordPress2({id: item.key})}><Text>{item.key}</Text></TouchableOpacity>}
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
