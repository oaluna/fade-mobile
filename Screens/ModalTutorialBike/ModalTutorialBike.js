import * as React from "react";
import { Text, View } from "react-native";

// components
import ModalHeader from "../../Components/ModalHeader";

const ModalTutorialBike = () => (
  <View style={{ backgroundColor: "white", flex: 1 }}>
    <ModalHeader text="Tutorial Bike" />

    <View style={{ padding: 24 }}>
      <Text>ModalTutorialBike</Text>
    </View>
  </View>
);

export default ModalTutorialBike;
