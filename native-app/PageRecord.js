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
   Dimensions,
 } from 'react-native';
 // import styles from './styles';
 //  import MyStack from './stackNavigator';
 //  const stackNavigator = MyStack()
 
 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;
 
 
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
     alignItems: "center",
     justifyContent: "center",
     paddingTop: 50,
   },
 
   logo: {
     width: 500,
     height: 500,
     marginBottom: 40,
   },
 
 
   inputView: {
     backgroundColor: "#FFC0CB",
     borderRadius: 30,
     width: "70%",
     height: 45,
     marginBottom: 20,
 
     alignItems: "center",
   },
 
   TextInput: {
     height: 50,
     flex: 1,
     padding: 10,
     marginLeft: 20,
   },
 
   forgot_button: {
     height: 15,
     marginBottom: 10,
   },
 
   loginBtn: {
     width: "80%",
     borderRadius: 25,
     height: 50,
     alignItems: "center",
     justifyContent: "center",
     marginTop: 40,
     backgroundColor: "#FF1493",
   },
   containerList: {
     flex: 1,
     paddingTop: 22
     },
     item: {
       padding: 10,
       fontSize: 18,
       height: 44,
     },
   container: {
     flex: 1,
     justifyContent: 'center',
     marginHorizontal: 16,
   },
   title: {
     textAlign: 'center',
     marginVertical: 8,
     fontSize: 20,
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
   input: {
       height: windowHeight*0.25,
       margin: 12,
       borderWidth: 1,
       padding: 10,
       width: windowWidth/1.25,  
   },
 });
 
 const Separator = () => (
   <View style={styles.separator} />
 );
 
 // create GET call to fetch data and store in some data structure.
 const fetchData = () => {
 return fetch("https://randomuser.me/api/")
       .then((response) => response.json())
       .then((data) => console.log(data));}
 
 const PageRecord = ({navigation}) => {
 
   // Need to change response1 and onchangetext, not sure what it is.
   // Store GET datat in some data structure. Need one for question and answer.
 
   
   const [response1, onChangeText] = React.useState(null);
   return(
   <SafeAreaView style={styles.container}>
     <View style={styles.fixToTextCenter}>
       
       <Text style={styles.title}>
           Question goes here.
       </Text>
     </View>
     <Separator />
     <View style={styles.fixToTextCenter}>
   
     <TextInput
       multiline={true}
       style={styles.input}
       onChangeText={onChangeText}
       placeholder = {response1}
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
   
 
 
 export default PageRecord;
  