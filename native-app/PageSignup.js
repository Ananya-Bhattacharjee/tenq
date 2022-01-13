
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  AppRegistry,
  ScrollView,
} from "react-native";

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
});


export default function PageSignup({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function makeUser() {
      var request2 = new XMLHttpRequest();
      
      request2.onreadystatechange = function() {
        if (request2.readyState === XMLHttpRequest.DONE) {
          console.log(request2.response)
        }
      }
      request2.open('POST', 'https://tenq.chenpan.ca/user');
      request2.setRequestHeader('Content-Type', 'application/json');
      request2.setRequestHeader( 'Accept',"application/json, text/plain, /")
      const obj = {"username":"test2", "password":"aA123456", "stressLevel":10}
      const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
      request2.send(blob);
      // write value to file
    };
    
    return (
      <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{uri: 'https://sites.google.com/site/josephjaywilliams/_/rsrc/1322072013994/home/NIPS20picture.jpeg'}}
        />
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

     

      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Dashboard')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
