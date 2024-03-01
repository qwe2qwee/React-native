import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outncontainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.Incontainer, styles.pressed] : styles.Incontainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.button_colorM }}>
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
    backgroundColor: Colors.button_colorM,

    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  bottunText: {
    textAlign: "center",
    color: Colors.white,
  },

  pressed: {
    opacity: 0.75,
  },
});
