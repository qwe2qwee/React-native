import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native";
export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onConfirm={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#B2A4FF", "#FFB4B4"]} style={styles.background}>
      <ImageBackground
        imageStyle={styles.backgroundImage}
        style={styles.background}
        resizeMode='cover'
        source={require("./assets/superkitina--qMPLWd3HDo-unsplash.jpg")}>
        <SafeAreaView style={styles.background}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.3,
  },
});
