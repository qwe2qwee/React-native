import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [entered, setEntered] = useState("");

  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (en) => {
    setEntered(en);
  };
  const addGoalHandler = () => {
    setCourseGoal((current) => [...current, entered]);
    setEntered('')
  };
  return (
    <View style={styles.appCountainr}>
      <View style={styles.inputCountainer}>
        <TextInput
          placeholder='add your goals'
          style={styles.inputText}
          value={entered}
          onChangeText={goalInputHandler}
        />
        <Button title='adding' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsCountainer}>
        {courseGoal.map((tt,t) => (
          <Text key={t}>{tt}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appCountainr: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  inputCountainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    flex: 1,
  },
  goalsCountainer: {
    flex: 6,
  },

  inputText: {
    borderWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    alignItems: "center",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});
