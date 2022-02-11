/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { AsyncStorage } from 'react-native';
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
//  import MyStack from './stackNavigator';
//  const stackNavigator = MyStack()
 
 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const Page1 = ({navigation}) => {
    const [response1, onChangeText] = React.useState(null);
    function retVal() {
      // setRating1(value);
      global.responses["res1"] = response1;
      console.log(global.responses);
      // add response1 in local memory https://www.npmjs.com/package/react-native-fs
      // write value to file
      //AsyncStorage.getItem('r1', (err, result) => {
        //console.log(result);
      //});
      AsyncStorage.setItem(
        'r1',
        response1
      );
      AsyncStorage.getItem('r1', (err, result) => {
        console.log(result);
      });
      /*_storeData = async () => {
        try {
          await AsyncStorage.setItem(
            'r1',
            response1
          );
          AsyncStorage.getItem('r1', (err, result) => {
            console.log(result);
          });
        } catch (error) {
          // Error saving data
        }
      };*/
    };
    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.fixToTextCenter}>
        
        <Text style={styles.title}>
            What's the situation? Feel free to explain it in as much detail as you'd like.
        </Text>
      </View>
      <Separator />
      <View style={styles.fixToTextCenter}>
    
      <TextInput
        multiline={true}
        style={styles.input}
        onChangeText={onChangeText}
        value={response1}
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
            title="Next"
            onPress={() => {retVal(); navigation.navigate('Page3')}}
          />
        </View>
      </View>
    </SafeAreaView>
    );
    };
  
  
  
  export default Page1;
 