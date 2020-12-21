import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const MyHeader = (props) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content style={styles.inner} title={props.headerTitle} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: { backgroundColor: "blue" },
  inner: { alignItems: "center" },
});
export default MyHeader;
