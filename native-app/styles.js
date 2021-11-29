import React from 'react';

 import {StyleSheet, Dimensions,} from 'react-native';

 const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
  
  export default styles;