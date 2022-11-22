import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { fonts, gStyle, images } from "../Constants";

const RideTypeItem = ({ image, onPress, text }) => (
  <TouchableOpacity
    activeOpacity={styles.activeOpacity}
    onPress={onPress}
    style={styles.container}
  >
    <Image source={images[image]} style={styles.image} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

// RideTypeItem.propTypes = {
//   // required
//   image: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//   onPress: PropTypes.func.isRequired,
//   text: PropTypes.string.isRequired,
// };

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  image: {
    borderRadius: 18,
    height: 32,
    resizeMode: "contain",
    width: 32,
  },
  text: {
    fontFamily: fonts.uberRegular,
    fontSize: 20,
    marginLeft: 16,
  },
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
});

export default RideTypeItem;
