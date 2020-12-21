import * as React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

function MainScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "space-between",height:"25%",marginVertical:"50%" }}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("ViewFeedback")}
      >
        View Feedback
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("PriceComparatorScreen")}
      >
        Price Comparator
      </Button>

    
    </View>
  );
}

export default MainScreen;
