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
 
 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const Page3= ({navigation}) => {
    const [response3, onChangeText] = React.useState(null);
    function retVal() {
      // setRating1(value);
      global.responses["res3"] = response3;
      console.log(global.responses);
      // write value to file
      AsyncStorage.getItem('r1', (err, result) => {
        console.log(result);
      });
    };
    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.fixToTextCenter}>
        
        <Text style={styles.title}>
          What are you thinking to yourself?
        </Text>
      </View>
      <Separator />
      <View style={styles.fixToTextCenter}>
    
      <TextInput
        multiline={true}
        style={styles.input}
        onChangeText={onChangeText}
        value={response3}
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
            onPress={() => {retVal(); navigation.navigate('Page4')}}
          />
        </View>
      </View>
    </SafeAreaView>
    );
    };
  
  
  export default Page3;
 