/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

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
import PageRating from './PageRating'
import PageLogin from './PageLogin';
import PageReRating from './PageReRating'
import PageRatingDraw from './PageRatingDraw'
import PageSignup from './PageSignup'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const App: () => Node = () => {
   
  MyStack = () => 
  <Stack.Navigator screenOptions={{
  headerShown: false
  }}>
    
<Stack.Screen name="Dashboard" component={Home}/>
  {/*<Stack.Screen name="NewPage" component={Blank} />*/}
  <Stack.Screen name="Page6" component={Page6} />
  <Stack.Screen name="Page1" component={Page1} />
  <Stack.Screen name="Page3" component={Page3} />
  <Stack.Screen name="Page4" component={Page4} />
  <Stack.Screen name="Page5" component={Page5} />
  <Stack.Screen name="Page7" component={Page7} />
  <Stack.Screen name="Page8" component={Page8} />
  <Stack.Screen name="Page9" component={Page9} />
  <Stack.Screen name="PageRating" component={PageRating} />
  
  <Stack.Screen name="PageReRating" component={PageReRating} />
  <Stack.Screen name="PageLogin" component={PageLogin} />
  <Stack.Screen name="PageSignup" component={PageSignup} />
</Stack.Navigator>
  return (   
   
    <NavigationContainer>
     
     
      <Drawer.Navigator>
        <Drawer.Screen name="TenQ" component={MyStack}/>
        <Drawer.Screen name="New Survey" component={PageRatingDraw} />
        <Drawer.Screen name="Past responses" component={History} />
        <Drawer.Screen name="Logout" component={PageLogin} options={{headerShown: false,  swipeEnabled: false  }}/>
      </Drawer.Navigator>
 
    </NavigationContainer>
  );
};



export default App;
