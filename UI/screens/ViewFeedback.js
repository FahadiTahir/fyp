import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MyHeader from "../components/MyHeader";
import FeedbackData from "../utilities/FeedbackData";
import { Rating } from "react-native-ratings";

// import { Container } from './styles';

const ViewFeedback = () => {
  let [feedback, setFeedback] = useState(FeedbackData);

  useEffect(() => {}, [setFeedback, feedback]);

  let Views = (item) => (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.personContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.img}
              source={require("../utilities/person.jpg")}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </View>
        <View style={styles.rateDetail}>
          <Rating
            showRating
            startingValue={item.Ratings}
            readonly={true}
            imageSize={40}
          />
          <Text style={styles.txt}>{item.comment}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={feedback}
        renderItem={({ item }) => Views(item)}
      />
    </View>
  );
};

let styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
    marginBottom: 10,
    height: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderColor: "#a9a9a9",
    borderWidth: 0.5,
  },
  personContainer: {
    flexDirection: "row",
    marginTop: "2%",
    justifyContent: "space-around",
    height: 120,
  },
  imageContainer: {
    width: "40%",
  },
  nameContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "70%",
    height: 100,
    borderRadius: 100,
  },
  name: {
    fontSize: 18,
    marginRight: "30%",
    marginBottom: "20%",
    fontFamily:"Roboto-Light"
  },
  rateDetail: {
    height: 150,
    // justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily:"Roboto-Light"
  },
});
export default ViewFeedback;
