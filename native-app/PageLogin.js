
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
import Snackbar from "react-native-snackbar"
// import JSONObject from "org.json";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },

  logo: {
    width: 250,
    height: 150,
    marginBottom: 200,
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


export default function PageLogin({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function checkCred() {
      var request = new XMLHttpRequest();
      
      request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
          // var jsonObj = new JSONObject(request.responseText);
          // var message = jsonObj.getString("message");
          console.log(request.response)
          var status = request.status;
          var message = ""
          if (status===200){message = "Logged in"; navigation.navigate("Dashboard")}
          if (status === 404){message="Username not found"}
          if (status === 403){message="Incorrect password"}
          if (status === 500){message = "Hmmm something went wrong, try again later"}
          Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
          });
          
        }
      }
      
      request.open('POST', 'https://tenq.chenpan.ca/login/');
      request.setRequestHeader('Content-Type', 'application/json');
      const obj = {"username":email, "password":password}
      const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
      request.send(blob);
      // write value to file
    };
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
          source={require('./TenQ.png')}
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

      <TouchableOpacity onPress={()=>checkCred()}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>makeUser()}>
        <Text style={styles.forgot_button}>Don't have an account?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={()=>checkCred()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
