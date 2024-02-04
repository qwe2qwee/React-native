import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, title }) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: 10,
    width: "70%",
    borderRadius: 20,
    alignItems: "center",
    height: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Button;
