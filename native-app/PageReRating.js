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
    //const [rating2, setRating2] = React.useState();
    function retVal(value) {
      // setRating1(value);
      global.responses["rat2"] = value;
      console.log(global.responses);
      // write value to file
    };
    function Submit(){
      console.log(global.responses);
    }
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
        Rerate your stress from 0 to 10
        </Text>
      </View>
      <Separator />
      
    
      <View style={styles.fixToText}>
          <RadioForm
            radio_props={ratingScale}
            formHorizontal={true}
            buttonSize={10}
            labelHorizontal={false}
            onPress={(value)=>retVal(value)}
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
            title="Submit"
            onPress={() => {Submit(); navigation.popToTop(); navigation.goBack()}}
          />
        </View>
      </View>
     
    </SafeAreaView>
    );
    };
  
  export default PageRating;
 