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
 

 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const History = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.fixToTextCenter}>
        
        <Button
          title="New Survey"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <Separator />
      <View style={styles.fixToTextCenter}>
    
        <Button
          title="Continue"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
     
      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
  
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
  });
  
  export default History;
 