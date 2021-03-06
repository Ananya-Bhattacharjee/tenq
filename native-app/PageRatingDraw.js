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
 import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel,} from 'react-native-simple-radio-button';
 import styles from './styles';
 
 
 
 
 
 const Separator = () => (
    <View style={styles.separator} />
  );
  
  const PageRating = ({navigation}) => {
    const [text, onChangeText] = React.useState(null);
    const ratingScale=[
        {label: "0", value:0},
        {label: "1", value:1},
        {label: "2", value:2},
        {label: "3", value:3},
        {label: "4", value:4},
        {label: "5", value:5},
        {label: "6", value:6},
        {label: "7", value:7},
        {label: "8", value:8},
        {label: "9", value:9},
        {label: "10", value:10},
    ]
    
    return(
    <SafeAreaView style={styles.container}>
        
      <View style={styles.fixToTextCenter}>
        
        <Text style={styles.title}>
        Think of a particular situation where you felt stressed or had a negative emotion, which you can try to reflect
        on as you go through this activity. It could be a current situation, one in the past, or one you anticipate in the future.
        </Text>
      </View>
      <Separator />
      
    
      <View style={styles.fixToText}>
          <RadioForm
            radio_props={ratingScale}
            formHorizontal={true}
            buttonSize={10}
            labelHorizontal={false}
            onPress={(value)=>{}}
          />

        </View>
     
      <Separator />
     
      <View>
        
        <View style={styles.fixToText}>
          <Button
            title="Quit"
            onPress={() => navigation.goBack()}
            
          />
          <Button
            title="Next"
            onPress={() => navigation.navigate('Page1')}
          />
        </View>
      </View>
     
    </SafeAreaView>
    );
    };
  
  export default PageRating;
 