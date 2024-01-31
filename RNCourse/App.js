import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoslItems from "./components/GoslItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalIsVisible, setModal] = useState(false);

  const changed = () => {
    setModal(true);
  };
  const addGoalHandler = (tttt) => {
    setCourseGoal((current) => [
      ...current,
      { Text: tttt, id: Math.random().toString() },
    ]);
  };

  const deletGoalHandler = (id) => {
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appCountainr}>
      <Button title='Add New Goal' color='#5e0acc' onPress={changed} />
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} />
      <View style={styles.goalsCountainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <GoslItems
                Text={itemData.item.Text}
                id={itemData.item.id}
                onDelete={deletGoalHandler}
              />
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

  goalsCountainer: {
    flex: 6,
  },
});
