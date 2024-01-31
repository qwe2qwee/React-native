import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoslItems = (porps) => {
  return (
    <View style={styles.llist}>
      <Pressable
        onPress={porps.onDelete.bind(this, porps.id)}
        android_ripple={{ color: "red" }}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.llistT}>{porps.Text}</Text>
      </Pressable>
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
  },
  pressedItem: {
    opacity: 0.5,
  },
  llistT: {
    color: "white",
    padding: 8,
    borderRadius: 5,
  },
});
