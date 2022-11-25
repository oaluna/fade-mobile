import * as React from "react";
import { StyleSheet, Text, Dimensions, View, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { colors, device, fonts } from "../Constants";

const Drawer = createDrawerNavigator();

const { width, height } = Dimensions.get("screen");

const CustomDrawerContent = ({ navigation }) => (
  <View style={styles.container}>
    <View style={{ marginLeft: 15 }}>
      <View>
        <Image
          source={require("../assets/images/fade-logo.png")}
          style={{
            resizeMode: "contain",
            width: 250,
            height: 50,

            marginTop: 50,
            marginBottom: 0
          }}
        />
      </View>
      <View style={styles.drawerNav}>
        <View>
          <Text style={{ color: "white", fontSize: 24 }}>Join a Carpool</Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 24 }}>Start a Carpool</Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 24 }}>My Routes</Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 24 }}>My Subscriptions</Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 24 }}>My Profile</Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 24 }}>Settings</Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 24 }} onPress={()=>navigation.navigate('SearchScreen')}>Search</Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 24 }} onPress={() => navigation.navigate('ModalHelp')}>Help</Text>
        </View>
      </View>
    </View>
    <View style={styles.containerVersion}>
      <Text>1.0.0</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#333333",
    elevation: 3
  },
  containerVersion: {
    bottom: device.iPhoneNotch ? 40 : 16,
    paddingHorizontal: 38,
    position: "absolute",
    width: "100%",
  },
  versionText: {
    color: "grey",
    fontFamily: fonts.comfortaaRegular,
    fontSize: 20,
    textAlign: "right",
  },
  drawerNav: {
    height: height / 2,
    justifyContent: "space-evenly",
    fontSize: 24
  },
});

export default CustomDrawerContent;
