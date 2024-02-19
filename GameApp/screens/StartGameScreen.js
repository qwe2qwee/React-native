import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({onConfirm}) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("خطأ", "يجب أن يكون الرقم صحيحًا وأكبر من الصفر", [
        { text: "حسنا", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onConfirm(chosenNumber)
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#9e8cff",
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
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});
