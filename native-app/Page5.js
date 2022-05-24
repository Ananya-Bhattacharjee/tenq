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
 
 import styles from './styles';
 import { AsyncStorage } from 'react-native';
 import { useFocusEffect } from "@react-navigation/native";
 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const Page5= ({navigation}) => {
    const [response5, onChangeText] = React.useState(null);
    const [default_res, setDefault] = React.useState("");
    useFocusEffect(
      React.useCallback(() => {
        // setDummyList( )
        //console.log(route.params.resIDList);
        //console.log(route.params.resIDList)
       async function get_button_info(){
        await AsyncStorage.getItem('r5', (err, result) => {
          console.log(result);
          if (result != null){
          setDefault(result)
          onChangeText(result);
          }
        });
        
       }
        get_button_info();
        //console.log(buttonsListArr);
      }, [])
    );
    function retVal() {
      // setRating1(value);
      global.responses["res5"] = response5;
      console.log(global.responses);
      // write value to file
      AsyncStorage.setItem(
        'r5',
        response5
      );
      AsyncStorage.setItem(
        'a_to',
        '5'
      );
      AsyncStorage.setItem(
        'flag_tenq',
        '1'
      );

    };
    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.fixToTextCenter}>
        
        <Text style={styles.title}>
          What do you feel when you think this?
        </Text>
      </View>
      <Separator />
      <View style={styles.fixToTextCenter}>
    
      <TextInput
      multiline={true}
        style={styles.input}
        onChangeText={onChangeText}
        value={response5}
        defaultValue = {default_res}
      />
      </View>
      <Separator />
     
      <View>
        
        <View style={styles.fixToText}>
          <Button
            title="Previous"
            onPress={() => {retVal(); navigation.goBack()}}
          />
          <Button
            title="Save & quit"
            onPress={() => {retVal(); navigation.navigate("Dashboard")}}
          />
          <Button
            title="Next"
            onPress={() => {retVal(); navigation.navigate('Page6')}}
          />
        </View>
      </View>
    </SafeAreaView>
    );
    };
  
  
  
  export default Page5;
 