/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { AsyncStorage } from 'react-native';
 import { useState } from "react";
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
   Image
 } from 'react-native';
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fixToTextCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
  },
  separator: {
    marginVertical: 50,
    borderBottomColor: 'rgba(158, 150, 150, .5)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 200,
  },

});

 
 const Separator = () => (
    <View style={styles.separator} />
  );
  getFlag = async () => {
    try {
      const value = await AsyncStorage.getItem('flag_tenq');
      //console.log(value)
      if (value !== null) {
        // We have data!!
        console.log(value)
        return value;
      }
      else{
        
        await AsyncStorage.setItem(
          'flag_tenq',
          '0'
        );
        return '0';
      }
    } catch (error) {
      // Error retrieving data
      await AsyncStorage.setItem(
        'flag_tenq',
        '0'
      );
      return '0';
    }
  };
    
  async function GetContinue()  {
    var flag_tenq = await getFlag();
    console.log(flag_tenq)
    if (flag_tenq != '1'){
      return(
      <Button
      title="Continue"
      color="#f194ff"
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      disabled
    />)
    }
    else{ 
      //console.log(Home2)
      return(
      <Button
      title="Continue"
      color="#f194ff"
      onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      )
    }
  };
  const Home = ({navigation}) =>{
  const [continueButton, setContinue] = useState(null);
  useFocusEffect(
    React.useCallback(() => {
      // setDummyList( )
      //console.log(route.params.resIDList);
      //console.log(route.params.resIDList)
     async function get_button_info(){
      setContinue(await GetContinue())
     }
      get_button_info();
      //console.log(buttonsListArr);
    }, [])
  );
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.fixToTextCenter}>
      <Image
          style={styles.logo}
          source={require('./TenQ.png')}
        />
        
      </View>
      <View style={styles.fixToTextCenter}>
      <Button
          title="New Survey"
          onPress={() => navigation.navigate('PageRating')}
        />
        </View>
      <Separator />
      <View style={styles.fixToTextCenter}>
    
        {continueButton}
      </View>
      
    </SafeAreaView>
  )
  };
  export default Home;
 