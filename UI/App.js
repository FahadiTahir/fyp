import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MyHeader from "./components/MyHeader";
import FareCalculatorScreen from "./screens/FareCalculatorScreen";
import Feedback from "./screens/Feedback";
import PriceComparatorScreen from "./screens/PriceComparatorScreen";
import PriceComparatorSearchedScreen from "./screens/PriceComparatorSearchedScreen";
import ViewFeedback from "./screens/ViewFeedback";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const fetchFont = () => {
  return Font.loadAsync({
    "Roboto": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  });
};
export default function App() {
  let [loaded, setLoaded] = useState(false);
  const Stack = createStackNavigator();

  if (!loaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => {
          console.log("loaded");
          setLoaded(true);
        }}
        onError={() => console.log("Font loading failed")}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerStyle: { backgroundColor: "#162947" },
          headerTintColor: "#fff",
          headerTitleAlign:"center"
        }}
      >
        <Stack.Screen name="Home" component={MainScreen} />

        <Stack.Screen
          options={{ title: "Price Comparator" }}
          name="PriceComparatorScreen"
          component={PriceComparatorScreen}
        />
        <Stack.Screen
          options={{ title: "Price Comparator Searched" }}
          name="PriceComparatorSearchedScreen"
          component={PriceComparatorSearchedScreen}
        />
        <Stack.Screen
          options={{ title: "Fare Calculator" }}
          name="FareCalculatorScreen"
          component={FareCalculatorScreen}
        />
        <Stack.Screen
          options={{ title: "Feedback" }}
          name="Feedback"
          component={Feedback}
        />
        <Stack.Screen
          options={{ title: "View Feedback" }}
          name="ViewFeedback"
          component={ViewFeedback}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
