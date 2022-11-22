import React from "react";
//import PropTypes from "prop-types";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
//import { gStyle } from "../Constants";

const TouchText = ({ onPress, styleText, text }) => (
  <TouchableOpacity
    activeOpacity={styles.activeOpacity}
    hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
    onPress={onPress}
    style={styles.flexCenter}
  >
    <Text style={styleText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  activeOpacity: 0.7,
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  flexRowSpace: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navHeaderStyle: {
    backgroundColor: "black",
    borderBottomWidth: 0,
    elevation: 0,
  },
})

// TouchText.defaultProps = {
//   style: {},
//   styleText: {},
// };

// TouchText.propTypes = {
//   // required
//   text: PropTypes.string.isRequired,
//   onPress: PropTypes.func.isRequired,

//   // optional
//   style: PropTypes.oneOfType([
//     PropTypes.array,
//     PropTypes.number,
//     PropTypes.object,
//   ]),
//   styleText: PropTypes.oneOfType([
//     PropTypes.array,
//     PropTypes.number,
//     PropTypes.object,
//   ]),
// };

export default TouchText;
