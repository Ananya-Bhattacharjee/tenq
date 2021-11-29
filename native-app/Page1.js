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
//  import MyStack from './stackNavigator';
//  const stackNavigator = MyStack()
 
 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const Page1 = ({navigation}) => {
    const [text, onChangeText] = React.useState(null);
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
            onPress={() => navigation.navigate('Page3')}
          />
        </View>
      </View>
    </SafeAreaView>
    );
    };
  
  
  
  export default Page1;
 