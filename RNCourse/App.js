import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoslItems from "./components/GoslItems";

export default function App() {
  const [entered, setEntered] = useState("");

  const [courseGoal, setCourseGoal] = useState([]);

  let real = entered.trim("").length === 0;

  const goalInputHandler = (en) => {
    setEntered(en);
  };
  const addGoalHandler = () => {
    setCourseGoal((current) => [...current, {Text:entered, key: Math.random().toString()}]);
    setEntered("");
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
        <Button
          title='adding'
          onPress={addGoalHandler}
          disabled={real}
          color='#5e0acc'
        />
      </View>
      <View style={styles.goalsCountainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (

            <GoslItems Text={itemData.item.Text}/>

            );
          }}
        />
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
