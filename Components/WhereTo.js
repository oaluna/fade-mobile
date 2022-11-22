import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { device, fonts } from "../Constants";

// icons
const { height, width } = Dimensions.get("screen");

const WhereTo = () => {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
        <View style={styles.containerInput}>
          <View style={styles.containerSquare}>
            <View style={styles.square} />
          </View>

          <View style={styles.text}>
            <TextInput
              style={styles.formInput}
              onChangeText={onChangeText}
              placeholder="Where To?"
            />
          </View>
          <View style={styles.containerIcon}>
            <Image
              source={require("../assets/images/icon-dropoff.png")}
              style={{ width: 32, height: 32 }}
            />
          </View>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    position: "relative",
    shadowColor: "white",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginVertical: 55,
    width: width,
    height: 50,
    backgroundColor: "white",
    flex: 1,
    elevation: 4
  },
  containerInput: {
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    height: 48,
    width: width,
    padding: 5,
    elevation: 4
  },
  containerBanner: {
    backgroundColor: "black",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: 4,
    marginTop: 0,
    marginHorizontal: 0,
    width: width,
  },
  bannerText: {
    color: "white",
    fontFamily: fonts.uberMedium,
    fontSize: 12,
  },
  bannerMuted: {
    color: "#9bd7c2",
    fontFamily: fonts.uberMedium,
    fontSize: 12,
  },

  containerSquare: {
    alignItems: "center",
    flex: 2,
  },
  square: {
    backgroundColor: "black",
    height: 8,
    width: 8,
  },
  text: {
    color: "grey",
    flex: 8,
    fontFamily: fonts.uberMedium,
    fontSize: 20,
  },
  containerIcon: {
    alignItems: "center",
    borderLeftColor: "grey",
    borderLeftWidth: 1,
    flex: 2,
  },
  tinyLogo: {
    height: 100,
    position: "absolute",
    width: 200,
    zIndex: 10,
  },
  formInput: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderWidth: 1,
    color: "black",
    fontSize: 16,
    fontWeight: fonts.normal,
    height: 40,
    marginVertical: 25,
    width: 300,
  },
  activeOpacity: 0.7,
});


export default WhereTo;
