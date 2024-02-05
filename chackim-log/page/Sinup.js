import React, { useState } from "react";
import Inputs from "../components/inputsLong/Inputs";
import InputLongPass from "../components/inputsLong/InputLongPass";
import InputLong from "../components/inputsLong/InputLong";
import Button from "../components/Button";
import Logo from "../components/Logo";

import { StyleSheet, Text, View } from "react-native";

const Sinup = (props) => {
  const [isChecked, setChecked] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.in}>
        <Logo title={"تسجيل مستخدم جديد"} />
        <Inputs name1={"الاسم الاول"} name2={"الاسم الاخير"} />
        <InputLong name={"الجوال"} />
        <InputLong name={"البريد الإلكتروني"} />
        <Inputs name1={"المدينة"} name2={"الدائرة"} />
        <InputLongPass name={"كلمة المرور"} />
        <InputLongPass name={"تأكيد كلمة المرور"} />
        <Button title={"تسجيل الدخول"} onPress={props.set} />
      </View>
    </View>
  );
};

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

export default Sinup;
