import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  const PressHandler = () => {
    console.log("pressed!");
  };
  return (
    <View style={styles.outncontainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.Incontainer, styles.pressed] : styles.Incontainer
        }
        onPress={PressHandler}
        android_ripple={{ color: "#FFB4B4" }}>
        <Text style={styles.bottunText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outncontainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  Incontainer: {
    backgroundColor: "#FFDEB4",

    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  bottunText: {
    textAlign: "center",
    color: "white",
  },

  pressed: {
    opacity: 0.75,
  },
});
