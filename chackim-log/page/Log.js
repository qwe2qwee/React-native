import React from "react";
import { StyleSheet, View} from "react-native";

import InputLong from "../components/inputsLong/InputLong";
import InputLongPass from "../components/inputsLong/InputLongPass";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Sbutton from "../components/Sbutton";

const Log = (props) => {
  return (
    <>
      <Logo title={"تسجيل الدخول"} />
      <InputLong name={"رقم الجوال"} />
      <InputLongPass name={"كلمة المرور"} />
      <Button title={"تسجيل الدخول"} />
      <Sbutton title={'حساب جديد'} onPress={props.set} />
    </>
  );
};

const styles = StyleSheet.create({
  in:{
    width:'100%'
  }
})

export default Log;
