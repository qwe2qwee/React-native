import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal,Image } from "react-native";

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
        <Image source={require('../assets/img/goal.png')} style={styles.image}/>
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
            <Button title='Cancel' color="#5e0acc" onPress={props.onCancel} />
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
    padding:16,
    backgroundColor:'#311b6b',
    flex: 1,
  },
  image: {
    width:100,
    height:100,
    margin:20
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#ccc",
    color:'#120438',
    backgroundColor:'#e4d0ff',
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
