import * as React from "react";
import { Text, View } from "react-native";

// components
import ModalHeader from "../../Components/ModalHeader";

const ModalHelp = () => (
  <View style={{ backgroundColor: "white", flex: 1 }}>
    <ModalHeader text="Help" />

    <View style={{ padding: 24 }}>
      <Text>ModalHelp</Text>
    </View>
  </View>
);

export default ModalHelp;
