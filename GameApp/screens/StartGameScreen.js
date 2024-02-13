import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
      />

      <View style={styles.btutonsC}>
        <View style={styles.bottuonsc}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.bottuonsc}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#B2A4FF",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    textAlign: "center",
    color: "white",
    height: 50,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    marginVertical: 8,
    fontWeight: "bold",
    fontSize: 32,
    margin: "auto",
  },

  btutonsC: {
    flexDirection: "row",
  },
  bottuonsc:{
    flex:1
  }

});
