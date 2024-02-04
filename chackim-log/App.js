import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import InputLong from "./components/inputsLong/inputLong";
import Sinup from "./page/Sinup";
import Button from "./components/Button";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.in}>
        <Button title={"تسجيل الدخول"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    padding: 10,
  },
  in: {
    width: "90%",
    margin: "auto",
  },
});
