import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import {} from "../Constants";

const ModalBackdrop = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.backdrop} />
  </TouchableWithoutFeedback>
);

ModalBackdrop.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default ModalBackdrop;