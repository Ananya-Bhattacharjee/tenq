import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageHistory from './PageHistory';
import PageRecord from './PageRecord';

const Stack = createNativeStackNavigator();


export default function HistoryStack(){
return(
  <Stack.Navigator screenOptions={{
  headerShown: false
  }}>
    
<Stack.Screen name="PageHistory" component={PageHistory}/>
 
  <Stack.Screen name="PageRecord" component={PageRecord} />
</Stack.Navigator>
)
}