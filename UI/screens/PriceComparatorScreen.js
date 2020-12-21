import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import MyHeader from "../components/MyHeader";
import { TextInput } from "react-native-paper";

// import { Container } from './styles';

const PriceComparatorScreen = ({navigation}) => {
  let [word, setWord] = useState("");
  
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          label="Enter Item"
          selectionColor="blue"
          onChangeText={(text) => setWord(text)}
          value={word}
        />
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.touchOp} onPress={
            ()=>{
              navigation.navigate("PriceComparatorSearchedScreen")
            }
          }>
            <View style={styles.txtContainer}>
              <Text style={styles.searchText}>Search</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  TextInput: {
    color: "#000",
  },
  container: {
    width: "80%",
    alignSelf: "center",
    height: "60%",
    marginVertical: "25%",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  txtInput: {
    width: "80%",
  },
  wrapper: {
    height: "15%",
    width: "90%",
    alignItems: "center",
  },
  touchOp: {
    width: "40%",
    height: "90%",
  },
  txtContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 10,
    backgroundColor: "#162947",
    height: "100%",
    justifyContent: "center",
  },
  searchText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontFamily:"Roboto-Light"
  },
});
export default PriceComparatorScreen;
