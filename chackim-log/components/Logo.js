import { View, StyleSheet, Image, Text } from "react-native";

const Logo = (props) => {
  return (
    <View style={styles.image}>
      <Image source={require("../assets/Group 209.png")} />
      <Text style={styles.tex}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain", // You can adjust the resizeMode based on your requirements
    marginBottom: 80,
    alignItems: "center",
    textAlign: "center",
  },

  tex: {
    color: "#2680EB",
    margin:"auto",
    marginTop: 29,
    fontSize: 20,
    textAlign:'center',
  },
});

export default Logo;
