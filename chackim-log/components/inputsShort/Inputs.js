import React from "react";

import { Text, View, TextInput, StyleSheet } from "react-native";

const Inputs = (props) => {
  return (
    <View style={styles.coun}>
      <View styles={styles.coun_in}>
        {" "}
        <Text style={styles.text}>{props.name1}</Text>
        <TextInput
          multiline
          placeholder='Enter multiple lines of text'
          onChangeText={(text) => console.log(text)}
        />{" "}
      </View>
      <View styles={styles.coun_in}>
        {" "}
        <Text style={styles.text}>{props.name2}</Text>
        <TextInput
          multiline
          placeholder='Enter multiple lines of text'
          onChangeText={(text) => console.log(text)}
        />
      </View>
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
  coun_in: {
    flexDirection: "row",
    width: "50%",
  },
});

export default Inputs;
