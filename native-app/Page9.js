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
 
 
 
 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const Page8 = ({navigation}) => {
    const [response9, onChangeText] = React.useState(null);
    function retVal() {
      // setRating1(value);
      global.responses["res9"] = response9;
      console.log(global.responses);
      // write value to file
      AsyncStorage.setItem(
        'r9',
        response9
      );
      AsyncStorage.setItem(
        'a_to',
        '9'
      );

    };
    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.fixToTextCenter}>
        
        <Text style={styles.title}>
        If you were to explore an alternative line of thinking, how would you do it?
        </Text>
      </View>
      <Separator />
      <View style={styles.fixToTextCenter}>
    
      <TextInput
      multiline={true}
        style={styles.input}
        onChangeText={onChangeText}
        value={response9}
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
            onPress={() =>{retVal(); navigation.navigate('PageReRating') }}
          />
        </View>
      </View>
    </SafeAreaView>
    );
    };
  
  export default Page8;
 