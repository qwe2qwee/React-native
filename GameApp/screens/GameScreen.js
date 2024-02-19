import React from "react";
import { Text, View , StyleSheet} from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Guss Screen</Text>
      <Text>Guss</Text>
      <View><Text>Higher or lower?</Text></View>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex:1,
    padding:24
  }
})
