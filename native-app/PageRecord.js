/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// To-do: 1) Make the static words in the textbox. DONE. 2) Connect with API
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
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
  Dimensions
} from "react-native";
// import styles from './styles';
//  import MyStack from './stackNavigator';
//  const stackNavigator = MyStack()

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },

  logo: {
    width: 500,
    height: 500,
    marginBottom: 40
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center"
  },

  TextInput: {
    height: 25,
    flex: 1,
    marginLeft: 20,
    width: 20
  },

  forgot_button: {
    height: 15,
    marginBottom: 10
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493"
  },
  containerList: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 20
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  fixToTextCenter: {
    flexDirection: "row",
    justifyContent: "center",
    width: 1400
  },
  separator: {
    marginVertical: 50,
    borderBottomColor: "rgba(158, 150, 150, .5)",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  input: {
    height: windowHeight * 0.25,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: windowWidth / 1.25
  }
});

const Separator = () => <View style={styles.separator} />;

const getData = (resIDList) => {
  let n = resIDList.length;
  const resID = [];
  for (let i = 0; i < n; i++) {
    var resid = resIDList[i];
    var url = "localhost:11221/response/" + resid;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const resId = data._id;
        const questionId = data.questionId;
        const content = data.content;
        resID.push([questionId, content]);
      });
  }
  return resID;
};

const PageRecord = ({ navigation, resIDList }) => {
  const [buttonsListArr, setNewList] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      let dummyResID = getData(resIDList);
      setNewList(
        dummyResID.map((element) => (
          <SafeAreaView style={styles.container}>
            <View style={styles.fixToTextCenter}>
              <Text style={styles.title}>{element[0]}</Text>
            </View>
            <Separator />
            <View style={styles.fixToTextCenter}>
              <TextInput
                multiline={true}
                style={styles.input}
                editable={false}
                placeholder={element[1]}
              />
            </View>
            <Separator />
          </SafeAreaView>
        ))
      );
    }, [])
  );
  // const [onChangeText] = React.useState(null);
  // let dummyResID = [["q1","a1"],
  //   ["BIG ASS QUESTION","a2"],
  //   ["q3","a3"],
  //   ["q4","a4"],
  //   ["q5","a5"],
  //   ["q6","a6"],
  //   ["q7","a7"],
  //   ["q8","a8"],
  //   ["q9","a9"]
  // ]

  return (
    <SafeAreaView style={styles.container}>
      {buttonsListArr}
      <View>
        <View style={styles.fixToText}>
          <Button
            title="Back"
            onPress={() => navigation.navigate("PageHistory")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PageRecord;