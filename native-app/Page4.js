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
 
 
 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const Page4= ({navigation}) => {
    const [response4, onChangeText] = React.useState(null);
    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.fixToTextCenter}>
        
        <Text style={styles.title}>
          What thought is the most troubling?
        </Text>
      </View>
      <Separator />
      <View style={styles.fixToTextCenter}>
    
      <TextInput
      multiline={true}
        style={styles.input}
        onChangeText={onChangeText}
        value={response4}
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
            title="Next"
            onPress={() => navigation.navigate('Page5')}
          />
        </View>
      </View>
    </SafeAreaView>
    );
    };
  
  
  
  export default Page4;
 