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
 
 
 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const Page7 = ({navigation}) => {
    const [response7, onChangeText] = React.useState(null);
    function retVal() {
      // setRating1(value);
      global.responses["res7"] = response7;
      console.log(global.responses);
      // write value to file
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
 