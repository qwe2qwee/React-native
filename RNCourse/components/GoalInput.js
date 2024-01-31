import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal } from "react-native";

const GoalInput = (props) => {
  const [entered, setEntered] = useState("");
  let real = entered.trim("").length === 0;
  const goalInputHandler = (en) => {
    setEntered(en);
  };

  const addGoalHandler = () => {
    props.onAddGoal(entered);
    setEntered("");
  };

  return (
    <Modal animationType='slide' visible={props.visible}>
      <View style={styles.inputCountainer}>
        <TextInput
          placeholder='add your goals'
          style={styles.inputText}
          value={entered}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title='adding'
              onPress={addGoalHandler}
              disabled={real}
              color='#5e0acc'
            />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputCountainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding:16,
    borderBottomWidth: 1,
    flex: 1,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    width: "100%",
    padding: 8,
  },
  buttons: {
    flexDirection: "row",
    marginTop:16
  },
  button: {
    width:100,
    marginHorizontal:8
  }
});
