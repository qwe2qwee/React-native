import React from "react";

import { Text, View, TextInput, StyleSheet } from "react-native";

const InputLong = (props) => {
  return (
    <View style={styles.coun}>
      <Text style={styles.text}>{props.name}</Text>
      <TextInput
        multiline
        placeholder='Enter multiple lines of text'
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  coun: {
    width: "80%",
    padding: 3,
  },
  text: {
    color: "#2680EB",
    marginBottom: 5,
  },

  input: {
    backgroundColor: "#F2F3F7",
    borderRadius: 10,
    width: "100%",
    marginBottom: 2,
    height: 30,
    padding: 5,
  },
});

export default InputLong;
