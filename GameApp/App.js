import { StyleSheet ,View} from "react-native";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.background}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#FFB4B4',
    flex:1
  }
});
