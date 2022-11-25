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
    alignSelf: 'center',
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    top: device.iPhoneNotch ? 144 : 120,
    width: device.width - 40
  },
  containerBanner: {
    backgroundColor: 'darkgreen',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 20
  },
  bannerText: {
    color: 'white',
    fontFamily: fonts.comfortaaMedium,
    fontSize: 12
  },
  bannerMuted: {
    color: '#2afbff',
    fontFamily: fonts.comfortaaMedium,
    fontSize: 12
  },
  containerInput: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 48,
    marginTop: -90,
    elevation: 2
  },
  containerSquare: {
    alignItems: 'center',
    flex: 2
  },
  square: {
    backgroundColor: 'black',
    height: 8,
    width: 8
  },
  text: {
    color: 'lightgrey',
    flex: 8,
    fontFamily: fonts.comfortaaMedium,
    fontSize: 20
  },
  containerIcon: {
    alignItems: 'center',
    borderLeftColor: 'darkgrey',
    borderLeftWidth: 1,
    flex: 2
  }
});

export default PickupAddress;
