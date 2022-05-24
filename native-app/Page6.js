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
  
  const Page6 = ({navigation}) => {
    const [response6, onChangeText] = React.useState(null);
    const [default_res, setDefault] = React.useState("");
    useFocusEffect(
      React.useCallback(() => {
        // setDummyList( )
        //console.log(route.params.resIDList);
        //console.log(route.params.resIDList)
       async function get_button_info(){
        await AsyncStorage.getItem('r6', (err, result) => {
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
      global.responses["res6"] = response6;
      console.log(global.responses);
      // write value to file
      AsyncStorage.setItem(
        'r6',
        response6
      );
      AsyncStorage.setItem(
        'a_to',
        '6'
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
            When you have these feelings, what actions do you take? What actions do you avoid?
        </Text>
      </View>
      <Separator />
      <View style={styles.fixToTextCenter}>
    
      <TextInput
      multiline={true}
        style={styles.input}
        onChangeText={onChangeText}
        value={response6}
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
            onPress={() => {retVal(); navigation.navigate('Page7')}}
          />
        </View>
      </View>
    </SafeAreaView>
    );
    };
  
  
  
  export default Page6;
 