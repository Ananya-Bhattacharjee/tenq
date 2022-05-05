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
   FlatList,
 } from 'react-native';
 import styles from './styles';
 import { AsyncStorage } from 'react-native';
 
 import { useFocusEffect } from "@react-navigation/native";
 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const Page7 = ({navigation}) => {
    const [response7, onChangeText] = React.useState(null);
    const [default_res, setDefault] = React.useState("");
    useFocusEffect(
      React.useCallback(() => {
        // setDummyList( )
        //console.log(route.params.resIDList);
        //console.log(route.params.resIDList)
       async function get_button_info(){
        await AsyncStorage.getItem('r7', (err, result) => {
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
      global.responses["res7"] = response7;
      console.log(global.responses);
      // write value to file
      AsyncStorage.setItem(
        'r7',
        response7
      );
      AsyncStorage.setItem(
        'a_to',
        '7'
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
            Retype the summary of the situation in the following format:{"\n"}
            Trigger:{"\n"}
            Thought:{"\n"}
            Feeling:{"\n"}
            Behaviour:{"\n"}
        </Text>
        
      </View>
      
      
  
      <Separator />
      <View style={styles.fixToTextCenter}>
    
      <TextInput
      multiline={true}
        style={styles.input}
        onChangeText={onChangeText}
        value={response7}
        defaultValue = {default_res}
      />
      </View>
      <Separator />
     
      <View>
        
        <View style={styles.fixToText}>
          <Button
            title="Previous"
            onPress={() => {retVal();navigation.goBack()}}
          />
          <Button
            title="Next"
            onPress={() => {retVal(); navigation.navigate('Page8')}}
          />
        </View>
      </View>
    </SafeAreaView>
    );
    };
  
  
  export default Page7;
 