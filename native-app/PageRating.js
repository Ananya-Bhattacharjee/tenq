/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState } from 'react';
 import { useFocusEffect } from "@react-navigation/native";
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
 import { AsyncStorage } from 'react-native';
 
 

 const keyval = {
   '0':0,
   '1':1,
   '2':2,
   '3':3,
   '4':4,
   '5':5,
   '6':6,
   '7':7,
   '8':8,
   '9':9,
   '10':10
 }
 
 const Separator = () => (
    <View style={styles.separator} />
  );

  
  const PageRating = ({navigation}) => {
    // const [rating1, setRating1] = React.useState();
    const [default_res, setDefault] = React.useState(5);
    useFocusEffect(
      React.useCallback(() => {
        // setDummyList( )
        //console.log(route.params.resIDList);
        //console.log(route.params.resIDList)
       async function get_button_info(){
        await AsyncStorage.getItem('rate1', (err, result) => {
          //console.log(result);
          if (result != null){
            //console.log(keyval[result])
          setDefault(keyval[result])
          
          //global.responses["rat1"] = result
          }
        });
        
       }
        get_button_info();
        //console.log(buttonsListArr);
      }, [])
    );
    function retVal(value) {
      // setRating1(value);
      global.responses["rat1"] = value;
      console.log(global.responses);
      setDefault(value)
      // write value to file
      AsyncStorage.setItem(
        'rate1',
        value.toString()
      );
      AsyncStorage.setItem(
        'a_to',
        '1'
      );
      AsyncStorage.setItem(
        'flag_tenq',
        '1'
      );
      AsyncStorage.getItem('rate1', (err, result) => {
        console.log(result);
      });


    };
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
    ];
    
    return(
    <SafeAreaView style={styles.container}>
        
      <View style={styles.fixToTextCenter}>
         
        <Text style={styles.title}>
        Think of a particular situation where you felt stressed or had a negative emotion, which you can try to reflect
        on as you go through this activity. It could be a current situation, one in the past, or one you anticipate in the future.
        </Text>
      </View>
      <Separator />
      
    
      <View style={styles.fixToText}>
          <RadioForm
            radio_props={ratingScale}
            formHorizontal={true}
            buttonSize={10}
            labelHorizontal={false}
            initial = {default_res}
            onPress={(value)=>retVal(value)}
          />

        </View>
     
      <Separator />
     
      <View>
        
        <View style={styles.fixToText}>
          <Button
            title="Quit"
            onPress={() => navigation.goBack()}
            
          />
          <Button
            title="Save & quit"
            onPress={() => {retVal(default_res);navigation.goBack()}}
          />
          <Button
            title="Next"
            onPress={() => navigation.navigate('Page1')}
          />
        </View>
      </View>
     
    </SafeAreaView>
    );
    };
  
  export default PageRating;
 