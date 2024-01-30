import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoslItems = (porps) => {
  return (
    <View style={styles.llist}>
      <Text style={styles.llistT}>{porps.Text}</Text>
    </View>
  );
};

export default GoslItems;

const styles = StyleSheet.create({
  llist: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#5e0acc",
    margin: 8,
    flexDirection: "column-reverse",
    borderRadius: 5,
    padding: 8,
  },
  llistT: {
    color: "white",
  },
});
