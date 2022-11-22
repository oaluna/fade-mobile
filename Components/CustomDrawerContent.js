import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { device, fonts, images } from "../Constants";

const CustomDrawerContent = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={images.fadeLogo} style={styles.image} />
    </View>
    <View style={styles.drawerMenu}>
      <Text style={styles.drawerText}>Home</Text>
      <Text style={styles.drawerText}>Payments</Text>
      <Text style={styles.drawerText}>Find a Pool</Text>
      <Text style={styles.drawerText}>Messaging</Text>
      <Text style={styles.drawerText}>Subscriptions</Text>
      <Text style={styles.drawerText}>FAQ</Text>
      <Text style={styles.drawerText}>Settings</Text>
    </View>
    <View style={styles.containerVersion}></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    boxShadow: "1.5px 0px 8px rgba(0,0,0,0.7)",
    flex: 1,
  },
  containerVersion: {
    bottom: device.iPhoneNotch ? 40 : 16,
    marginTop: 85,
    paddingHorizontal: 38,
    position: "absolute",
    width: "100%",
  },
  drawerMenu: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    height: device.height,
  },
  drawerText: {
    color: "white",
    fontSize: 42,
    marginLeft: 15,
    paddingBottom: 15,
  },
  image: {
    backgroundColor: transparent,
    borderRadius: 0,
    height: 80,
    marginBottom: 25,
    marginTop: 85,
    resizeMode: "contain",
    width: 270,
  },
  versionText: {
    color: grey,
    fontFamily: fonts.uberRegular,
    fontSize: 20,
    textAlign: "right",
  },
});

export default CustomDrawerContent;
