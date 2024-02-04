import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const InputLongPass = (props) => {
  return (
    <View style={styles.coun}>
      <Text style={styles.text}>{props.name}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        onChangeText={(password) => console.log(password)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  coun:{
    width:'100%',
    padding:3
  },
  text: {
    color: "#2680EB",
    marginBottom:5
  },

  input: {
    backgroundColor: "#F2F3F7",
    borderRadius:20,
    width:"100%",
    marginBottom:2,
    height:30,
    padding:5
  },
});

export default InputLongPass;
