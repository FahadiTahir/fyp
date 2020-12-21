import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyHeader from "../components/MyHeader";
import ComparatorData from "../utilities/ComparatorData";

// import { Container } from './styles';

const PriceComparatorSearchedScreen = ({navigation}) => {
  let [search, setSearch] = useState(ComparatorData);

  const Views = (item) => (
    <TouchableOpacity onPress={()=>navigation.navigate("FareCalculatorScreen")}>
      <View style={styles.card}>
        <View style={styles.verText}>
          <Text style={styles.brandText}>{item.brandName}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.mobileName}>
            <Text style={styles.mobile}>{item.mobile}</Text>
          </View>
          <View style={styles.innerContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.img}
                source={require("../utilities/mobile.jpg")}
              />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.txt}>Price {item.price}</Text>
              <Text style={styles.txt}>Save {item.save}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {}, [setSearch]);
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={search}
        renderItem={({ item }) => Views(item)}
      />
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  card: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 0.2,
    margin: "1%",
    marginBottom: "2%",
    height: 220,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    alignItems: "center",
  },
  verText: {
    flex: 1,
    height: "100%",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  brandText: {
    transform: [{ rotateZ: "-90deg" }],
    color: "white",
    width:"100%",

    textTransform: "uppercase",
    fontFamily:"Roboto-Light",
    fontSize:10
  },
  container: {
    height: "100%",
    width: "85%",
  },
  mobileName: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  mobile: {
    marginTop: "1%",
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily:"Roboto-Light"
  },
  innerContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    width: "40%",
    height: "90%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  priceContainer: {
    marginRight: "15%",
  },
  txt: {
    marginVertical: "5%",
    textTransform: "capitalize",
    fontSize: 16,
    fontFamily:"Roboto-Light"
  },
});
export default PriceComparatorSearchedScreen;
