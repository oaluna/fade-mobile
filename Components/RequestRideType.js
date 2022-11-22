import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts, images } from "../Constants";

const RequestRideType = ({ image, onPress, text }) => (
  <View style={styles.container}>
  <TouchableOpacity
    activeOpacity={styles.activeOpacity}
    onPress={onPress}
  >
    <Image source={images[image]} style={styles.image} />
    <Text style={styles.text}>{text}</Text>
    <View style={styles.iconArrow}>
      <Image
        source={require("../assets/images/icon-bike.png")}
        style={{ width: 32, height: 32 }}
      />
    </View>
  </TouchableOpacity>
  </View>
);

RequestRideType.propTypes = {
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    flexWrap: "wrap",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 26,
    flexDirection: "row",
    padding: 2,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  image: {
    borderRadius: 18,
    height: 34,
    resizeMode: "contain",
    width: 34,
  },
  text: {
    fontFamily: fonts.light,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  iconArrow: {
    marginRight: 6,
    marginTop: 4,
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
  activeOpacity: 0.7,
});

export default RequestRideType;
