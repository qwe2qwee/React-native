import React from "react";

import { Text, View, TextInput, StyleSheet } from "react-native";

const Inputs = (props) => {
  return (
    <View style={styles.coun}>
      <View styles={styles.coun_in}>
        <Text style={styles.text}>{props.name1}</Text>
        <TextInput
          multiline
          style={styles.input}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View styles={styles.coun_in}>
        <Text style={styles.text}>{props.name2}</Text>
        <View style={styles.input_con}>
          <TextInput
            style={styles.input}
            multiline
            onChangeText={(text) => console.log(text)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coun: {
    width: "100%",
    padding: 3,
    flexDirection: "row",
    alignItems: "center",
    textAlign:"center",
    justifyContent:"space-between"
  },
  text: {
    color: "#2680EB",
    marginBottom: 5,
  },

  input: {
    backgroundColor: "#F2F3F7",
    borderRadius: 10,
    width: 140,
    marginBottom: 2,
    height: 30,
    padding:5
    
  },
  input_con: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin:'auto',
  },
  coun_in: {
    flexDirection: "row",
    width: "50%",
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Inputs;
