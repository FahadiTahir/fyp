import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FareCalculatedData from "../utilities/FareCalculatedData.js";


// import { Container } from './styles';

const FareCalculatorScreen = ({navigation}) => {
  let [getCalculatedData,setCalculatedData] = useState(FareCalculatedData);
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={styles.txtContainer}>
            <Text style={{...styles.txt,color:"gray"}}>{getCalculatedData.DateTime}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={{...styles.txt,color:"gray"}}>{getCalculatedData.DeliverTo}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={{...styles.txt,color:"gray"}}>Total Distance : {getCalculatedData.Distance}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={{...styles.txt,fontSize:20}}>Total Fare : {getCalculatedData.TotalFare}</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate("Feedback")}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Give Feedback</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    width: "80%",
    height: "80%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: "10%",
    justifyContent: "space-between",
    padding: "2%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container:{
      width:"90%",
      marginTop:"5%",
      height:"60%",
      justifyContent:"space-around",
      alignItems:"center",
  },
  btn: {
      marginBottom:"5%",
    backgroundColor: "#000080",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    padding: "4%",
    fontFamily:"Roboto-Light"
  },
  txt:{
    fontSize: 16,
    fontFamily:"Roboto-Light"
  
  }
});

export default FareCalculatorScreen;
