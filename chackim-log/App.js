import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputLongPass from "./components/inputsLong/InputLongPass";
// import InputLong from "./components/inputsLong/inputLong";
import Inputs from "./components/inputsShort/inputs";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.in}>
        <Inputs name1={'try1'} name2={'try2'}/>
        <InputLongPass name='new'/>
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
    width:"100%",
    padding:10,
  },
  in:{
    width:'100%',
    margin:"auto"
  }
});
