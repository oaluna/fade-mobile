import * as React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors, device, fonts } from "../Constants";

// icons
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
        <Image
          source={require("../assets/images/icon-goback.png")}
          style={{ resizeMode: "contain", width: 32, height: 32 }}
        />
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
    backgroundColor: "transparent",
    paddingHorizontal: 24,
    paddingTop: device.iPhoneNotch ? 48 : 24,
  },
  containerIconRight: {
    width: 20,
  },
  header: {
    color: "white",

    fontSize: 28,
    paddingVertical: 16,
  },
  
});

export default ModalHeader;
