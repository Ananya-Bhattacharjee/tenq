/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
 
 
 let month = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec"
}
 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const PageRating = ({navigation}) => {
    //const [rating2, setRating2] = React.useState();
    //const [currSurvey, setCurrSurvey] = React.useState(0)
    function retVal(value2) {
      // setRating1(value);
      global.responses["rat2"] = value2;
      console.log(global.responses);
      // write value to file
      AsyncStorage.setItem(
        'rate2',
        value2.toString()
      );

    };
    function initializeSurvey(){
      var request = new XMLHttpRequest();
      
      request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
          // var jsonObj = new JSONObject(request.responseText);
          // var message = jsonObj.getString("message");
          let obj = JSON.parse(request.response)
          
          if (request.status === 200){
          let currSurvey = obj["data"]["_id"]
          //setCurrSurvey(obj["data"]["_id"])
          
          Submit(currSurvey);
          AsyncStorage.setItem(
            'flag_tenq',
            "0"
          );
          AsyncStorage.setItem(
            'a_to',
            "0"
          );
          AsyncStorage.setItem(
            'rat1',
            "0"
          );
          AsyncStorage.setItem(
            'r1',
            ""
          );
          AsyncStorage.setItem(
            'r3',
            ""
          );
          AsyncStorage.setItem(
            'r4',
            ""
          );
          AsyncStorage.setItem(
            'r5',
            ""
          );
          AsyncStorage.setItem(
            'r6',
            ""
          );
          AsyncStorage.setItem(
            'r7',
            ""
          );
          AsyncStorage.setItem(
            'r8',
            ""
          );
          AsyncStorage.setItem(
            'r9',
            ""
          );
          }
          //console.log("new survey id:")
          //console.log(global.currSurvey)
        }
      }
      //var url ='localhost:11221/login/';
      var url = 'https://tenq.chenpan.ca/survey/';
      request.open('GET', url);
      request.setRequestHeader('Content-Type', 'application/json');
      const obj = {}
      const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
      request.send(blob);
    }
    function Submit(currSurvey){
      
      
      //initializeSurvey();
      //while (currSurvey === 0){}
      var date = new Date();
      var parse_Date = date.getDate()+' '+month[date.getMonth()+1]+' '+date.getFullYear()
      global.view_survey[currSurvey] = {"date": parse_Date}
      var i = 0;
      for (var key in global.responses){
        var request = new XMLHttpRequest();
        var content = global.responses[key]
        var url = 'https://tenq.chenpan.ca/response/';
        request.open('POST', url);
        const obj = {"questionId":global.qids[i], "surveyId":currSurvey, 
            "content":content}
        request.setRequestHeader('Content-Type', 'application/json');
          
        const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
        request.send(blob);
        //global.view_survey[global.currSurvey][global.qids[i]] = toString(content);
        i+=1;
      }
      
      global.surveys.push(currSurvey)
      get_responses(currSurvey)
      global.responses={}
      global.currSurvey=0;
      
      
    }
    const ratingScale=[
        {label: "0", value:0},
        {label: "1", value:1},
        {label: "2", value:2},
        {label: "3", value:3},
        {label: "4", value:4},
        {label: "5", value:5},
        {label: "6", value:6},
        {label: "7", value:7},
        {label: "8", value:8},
        {label: "9", value:9},
        {label: "10", value:10},
    ]
    return(
    <SafeAreaView style={styles.container}>
        
      <View style={styles.fixToTextCenter}>
        
        <Text style={styles.title}>
        Rerate your stress from 0 to 10
        </Text>
      </View>
      <Separator />
      
    
      <View style={styles.fixToText}>
          <RadioForm
            radio_props={ratingScale}
            formHorizontal={true}
            buttonSize={10}
            labelHorizontal={false}
            onPress={(value2)=>retVal(value2)}
          />

        </View>
     
      <Separator />
     
      <View>
        
        <View style={styles.fixToText}>
          <Button
            title="Previous"
            onPress={() => navigation.goBack()}
          />
          <Button
            title="Save & quit"
            onPress={() => {navigation.navigate("Dashboard")}}
          />
          <Button
            title="Submit"
            onPress={() => {initializeSurvey(); navigation.popToTop();}}
          />
        </View>
      </View>
     
    </SafeAreaView>
    );
    };
  
  export default PageRating;
 