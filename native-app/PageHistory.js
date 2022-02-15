import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList} from "react-native";
import  {Picker} from '@react-native-picker/picker'

export default function PageHistory({navigation}){
  
  let new_list = [{key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},]
  const [maxList, setMaxList] = useState(10)
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => (prevCount+1)>new_list.length/maxList?prevCount:prevCount+1);
  const onPress2 = () => setCount(prevCount => (prevCount - 1)<=-1?prevCount:prevCount-1);
  let char1="<";
  
// TODO: get response list from API
// TODO: build list navigation buttons
// TODO: connec to Johnny's page 
  return (
    
    <View style={styles.container}>
    <View style={styles.countContainer}>
    <Text style={styles.headingFont}>History</Text>
    </View>
      <View style={styles.container2}>
      <TouchableOpacity style={styles.button2} onPress={onPress2}><Text>{char1}{char1}
      </Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPress2}><Text>{count+1}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2}><Text>{count+2}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPress}><Text>{count+3}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPress}><Text>{">"}{">"}</Text></TouchableOpacity>
        {/* <Picker
        selectedValue={maxList}
        style={styles.button2}
        onValueChange={(itemValue, itemIndex) => setMaxList(itemValue)}
      >
        <Picker.Item  label="5" value="5"/>
        <Picker.Item label="10" value="10" />
        <Picker.Item label="50" value="50" />
      </Picker> */}
      </View>

      <FlatList
        data={new_list.slice(count*maxList, count*maxList+maxList)}
        renderItem={({item}) => <TouchableOpacity style={styles.button}><Text>{item.key}</Text></TouchableOpacity>}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    borderColor:"#FF0000",
  },
  containerDropdown: {
    flex: 1,
    justifyContent: "right",
    fontColor:"#FF0000",
    fontSize:7
  },
  container2: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "center",
    paddingTop:-10
    
  },
  button: {
    alignItems: "center",
    borderColor: "#D1DDFF",
    padding: 10,
    borderRadius: 15,
    borderWidth:2,
  
    
    overflow:'hidden'
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#D1DDFF",
    padding: 10,
    borderRadius: 5,
    height:40,
    width:50,
  
    
    overflow:'hidden'
  },
  dropdown: {
    alignItems: "center",
    backgroundColor: "#D1DDFF",
    padding: 10,
    borderRadius: 5,
    height:40,
    width:50,
    borderWidth:0,
    fontSize:10,
    overflow:'hidden'
  },
  
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  headingFont:{
    fontFamily:'normal',
    fontSize:26,
  }
});
