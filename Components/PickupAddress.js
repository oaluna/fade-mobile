import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from "react-native";

import { device, fonts } from "../Constants";

// icons

const { width, height } = Dimensions.get("screen");

const PickupAddress = () => {
  const [text, onChangeText] = React.useState("");
  return (
    <View>
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1667965013/fade-logo_lkscdd.svg",
          }}
        />
      </View>
      <View style={styles.containerBanner}>
        <Text style={styles.bannerText}>30% off, up to $6.00</Text>
        <Text style={styles.bannerMuted}>3 days</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <View style={styles.containerSquare}>
            <View style={styles.square} />
          </View>

          <View style={styles.text}>
            <TextInput
              style={styles.formInput}
              onChangeText={onChangeText}
              placeholder="Pickup Address?"
            />
          </View>
          <View style={styles.containerIcon}>
            <Image
              source={require("../assets/images/icon-pickup.png")}
              style={{ width: 32, height: 32 }}
            />
          </View>
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
    marginTop: 0,
    width: width,
    height: 48,
    elevation: 4,
    backgroundColor: "white",
    flex: 1,
  },
  containerInput: {
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    height: 48,
    padding: 5,
    width: width,
    elevation: 4
  },
  containerBanner: {
    backgroundColor: "black",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: "row",
    alignItems:'flex-start',
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 0,
    marginTop: 0,
    height: 30,
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

export default PickupAddress;
