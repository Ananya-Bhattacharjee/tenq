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
  
  const Page8 = ({navigation}) => {
    const [text, onChangeText] = React.useState(null);
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
        value={text}
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
            onPress={() =>navigation.navigate('PageReRating') }
          />
        </View>
      </View>
    </SafeAreaView>
    );
    };
  
  export default Page8;
 