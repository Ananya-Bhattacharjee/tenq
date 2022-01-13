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

    const [confirm_password, setConfirmPassword] = useState("");
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    function makeUser() {
      var request2 = new XMLHttpRequest();
      
      request2.onreadystatechange = function() {
        if (request2.readyState === XMLHttpRequest.DONE) {
          console.log(request2.response)
          navigation.navigate("PageLogin")
        }
      }
      request2.open('POST', 'https://tenq.chenpan.ca/user');
      request2.setRequestHeader('Content-Type', 'application/json');
      request2.setRequestHeader( 'Accept',"application/json, text/plain, /")
      if (password == confirm_password){
        const obj = {"firstname":first_name, "lastname":last_name, "email":email, "password":password, "stressLevel":10}
        const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
        request2.send(blob);
        
      }
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
          placeholder="First Name."
          placeholderTextColor="#003f5c"
          onChangeText={(first_name) => setFirstName(first_name)}
        />
      </View>
      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Last Name."
        placeholderTextColor="#003f5c"
        onChangeText={(last_name) => setLastName(last_name)}
      />
    </View>        

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
      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Confirm Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(confirm_password) => setConfirmPassword(confirm_password)}
      />
    </View>

      {/*<TouchableOpacity onPress={()=>checkCred()}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>checkCred()}>
        <Text style={styles.forgot_button}>Don't have an account?</Text>
    </TouchableOpacity>*/}
      <TouchableOpacity style={styles.loginBtn} onPress={()=>makeUser()}>
        <Text style={styles.loginText}>Create Account</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
