/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home'
import History from './history'
import Page6 from './Page6'
import Page5 from './Page5';
import Page4 from './Page4';
import Page3 from './Page3';
import Page1 from './Page1';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page1_v from './Page1_v';
import Page6_v from './Page6_v'
import Page5_v from './Page5_v';
import Page4_v from './Page4_v';
import Page3_v from './Page3_v';
import Page7_v from './Page7_v';
import Page8_v from './Page8_v';
import Page9_v from './Page9_v';
import PageRating from './PageRating'
import PageLogin from './PageLogin';
import PageReRating from './PageReRating'
import PageRatingDraw from './PageRatingDraw'
import PageSignup from './PageSignup'
import PageHistory from './PageHistory';
import PageRecord from './PageRecord';
import HistoryStack from './HistoryStack';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const App: () => Node = () => {
  const getFlag = () => {
    try {
      const username = AsyncStorage.getItem('un');
      const password = AsyncStorage.getItem('pw');
      console.log("username: " + username);
      // might need to fix the login page
      if (username !== null && password!=null) {
        // We have data!!
        return (username, password);
      }
      else{
        return ('0', '0');
      }
    } catch (error) {
      // Error retrieving data
      return ('0', '0');
    }
  };
  // function GetContinue()  {
  //   var username, password = getFlag();
  //   console.log(username)
  //   if (username=='0' || password=='0'){
  //     return(
  //       <Stack.Navigator screenOptions={{
  //         headerShown: false
  //         }}>
  //         <Stack.Screen name="PageLogin" component={PageLogin} />
  //       <Stack.Screen name="Dashboard" component={Home}/>
  //         {/*<Stack.Screen name="NewPage" component={Blank} />*/}
  //         <Stack.Screen name="Page6" component={Page6_v} />
  //         <Stack.Screen name="Page1" component={Page1_v} />
  //         <Stack.Screen name="Page3" component={Page3_v} />
  //         <Stack.Screen name="Page4" component={Page4_v} />
  //         <Stack.Screen name="Page5" component={Page5_v} />
  //         <Stack.Screen name="Page7" component={Page7_v} />
  //         <Stack.Screen name="Page8" component={Page8_v} />
  //         <Stack.Screen name="Page9" component={Page9_v} />
  //         <Stack.Screen name="PageRating" component={PageRating} />
          
  //         <Stack.Screen name="PageReRating" component={PageReRating} />
  //         <Stack.Screen name="PageSignup" component={PageSignup} />
  //       </Stack.Navigator>
  //   )
  //   }
  //   else{ 
  //     //console.log(Home2)
  //     return(
  //       <Stack.Navigator screenOptions={{
  //         headerShown: false
  //         }}>
            
  //       <Stack.Screen name="Dashboard" component={Home}/>
  //         {/*<Stack.Screen name="NewPage" component={Blank} />*/}
  //         <Stack.Screen name="Page6" component={Page6_v} />
  //         <Stack.Screen name="Page1" component={Page1_v} />
  //         <Stack.Screen name="Page3" component={Page3_v} />
  //         <Stack.Screen name="Page4" component={Page4_v} />
  //         <Stack.Screen name="Page5" component={Page5_v} />
  //         <Stack.Screen name="Page7" component={Page7_v} />
  //         <Stack.Screen name="Page8" component={Page8_v} />
  //         <Stack.Screen name="Page9" component={Page9_v} />
  //         <Stack.Screen name="PageRating" component={PageRating} />
          
  //         <Stack.Screen name="PageReRating" component={PageReRating} />
  //         <Stack.Screen name="PageLogin" component={PageLogin} />
  //         <Stack.Screen name="PageSignup" component={PageSignup} />
  //       </Stack.Navigator>
  //     )
  //   }
  // };
  // const [continueButton, setContinue] = useState(null);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     // setDummyList( )
  //     //console.log(route.params.resIDList);
  //     //console.log(route.params.resIDList)
  //    function get_button_info(){
  //     setContinue(GetContinue())
  //    }
  //     get_button_info();
  //     //console.log(buttonsListArr);
  //   }, [])
  // );
//  MyStack = () =>
//   <Stack.Navigator screenOptions={{
//   headerShown: false
//   }}>
    
// <Stack.Screen name="Dashboard" component={Home}/>
//   {/*<Stack.Screen name="NewPage" component={Blank} />*/}
//   <Stack.Screen name="Page6" component={Page6} />
//   <Stack.Screen name="Page1" component={Page1_t} />
//   <Stack.Screen name="Page3" component={Page3} />
//   <Stack.Screen name="Page4" component={Page4} />
//   <Stack.Screen name="Page5" component={Page5} />
//   <Stack.Screen name="Page7" component={Page7} />
//   <Stack.Screen name="Page8" component={Page8} />
//   <Stack.Screen name="Page9" component={Page9} />
//   <Stack.Screen name="PageRating" component={PageRating} />
  
//   <Stack.Screen name="PageReRating" component={PageReRating} />
//   <Stack.Screen name="PageLogin" component={PageLogin} />
//   <Stack.Screen name="PageSignup" component={PageSignup} />
// </Stack.Navigator>

Voice_Stack = () =>
<Stack.Navigator screenOptions={{
  headerShown: false
  }}>
  {/* <Stack.Screen name="PageLogin" component={PageLogin} /> */}
  <Stack.Screen name="Dashboard" component={Home}/>
  {/*<Stack.Screen name="NewPage" component={Blank} />*/}
  <Stack.Screen name="Page6" component={Page6_v} />
  <Stack.Screen name="Page1" component={Page1_v} />
  <Stack.Screen name="Page3" component={Page3_v} />
  <Stack.Screen name="Page4" component={Page4_v} />
  <Stack.Screen name="Page5" component={Page5_v} />
  <Stack.Screen name="Page7" component={Page7_v} />
  <Stack.Screen name="Page8" component={Page8_v} />
  <Stack.Screen name="Page9" component={Page9_v} />
  <Stack.Screen name="PageRating" component={PageRating} />
  
  <Stack.Screen name="PageReRating" component={PageReRating} />
  
  <Stack.Screen name="PageSignup" component={PageSignup} />
</Stack.Navigator>
  
  var username, password = getFlag();
  if (username=='0' || password=='0') {
    return (
      <NavigationContainer>
      <Drawer.Screen name="Login" component={PageLogin} options={{headerShown: false,  swipeEnabled: false  }}/>
      <Drawer.Navigator>
        <Drawer.Screen name="TenQ" component={Voice_Stack}/>
        <Drawer.Screen name="New Survey" component={PageRating} />
        <Drawer.Screen name="Past responses" component={HistoryStack} />
        <Drawer.Screen name="Logout" component={PageLogin} options={{headerShown: false,  swipeEnabled: false  }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    )
  } else {
    return (
    <NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen name="TenQ" component={Voice_Stack}/>
        <Drawer.Screen name="New Survey" component={PageRating} />
        <Drawer.Screen name="Past responses" component={HistoryStack} />
        <Drawer.Screen name="Logout" component={PageLogin} options={{headerShown: false,  swipeEnabled: false  }}/>
      </Drawer.Navigator>

    </NavigationContainer>
    )

  }
  
//  return (
//
//    <NavigationContainer>
//
//      <Drawer.Navigator>
//        <Drawer.Screen name="TenQ" component={Voice_Stack}/>
//        <Drawer.Screen name="New Survey" component={PageRating} />
//        <Drawer.Screen name="Past responses" component={HistoryStack} />
//        <Drawer.Screen name="Logout" component={PageLogin} options={{headerShown: false,  swipeEnabled: false  }}/>
//      </Drawer.Navigator>
//
//    </NavigationContainer>
//  );
};



export default App;
