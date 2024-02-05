import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal } from "react-native";
// import InputLong from "./components/inputsLong/inputLong";
import Sinup from "./page/Sinup";
import Button from "./components/Button";
import Log from "./page/Log";
import { useState } from "react";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.in}>
        {!modalVisible &&<Log set={openModal} />}
        <Modal
          visible={modalVisible}
          animationType='slide'
          transparent={true}
          onRequestClose={closeModal}>
          <Sinup set={closeModal} />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    padding: 10,
  },
  in: {
    width: "90%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-between",
  },
});
