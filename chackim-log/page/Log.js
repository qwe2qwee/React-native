import React from "react";
import { View } from "react-native";

import InputLong from "../components/inputsLong/InputLong";
import InputLongPass from "../components/inputsLong/InputLongPass";

const Log = () => {
  return (
    <View>
      <InputLong name={"login"} />
      <InputLongPass name={"pass"} />
    </View>
  );
};

export default Log;
