import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { device, fonts, gStyle } from "../Constants";

// icons
//import SvgClose from "./icons/Svg.Close";

const ModalHeader = ({ style, text }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={styles.activeOpacity}
        hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
        onPress={() => navigation.goBack(null)}
        style={styles.containerIconRight}
      >
        X
      </TouchableOpacity>
      {text && <Text style={styles.header}>{text}</Text>}
    </View>
  );
};

ModalHeader.defaultProps = {
  style: {},
  text: null,
};

ModalHeader.propTypes = {
  // optional
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
  ]),
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingHorizontal: 24,
    paddingTop: 48
  },
  containerIconRight: {
    width: 20,
  },
  header: {
    color: "white",
    fontFamily: fonts.uberMedium,
    fontSize: 28,
    paddingVertical: 16,
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

export default ModalHeader;
