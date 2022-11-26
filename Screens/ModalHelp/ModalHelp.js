import * as React from "react";
import { StyleSheet, Text, Dimensions, View, Image, Modal, Animated } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ModalHeader from "../../Components/ModalHeader";
import ModalBackdrop from '../../Components/ModalBackdrop'

import { colors, device, fonts } from "../../Constants";

const Drawer = createDrawerNavigator();

const { width, height } = Dimensions.get("screen");

const helpLinks = [
  {
    id: 0,
    helpTitle: "My Addresses",
    screen: "HomeScreen",
  },
  {
    id: 1,
    helpTitle: "Safety Addresses",
    screen: "HomeScreen",
  },
  {
    id: 2,
    helpTitle: "Privacy Settings",
    screen: "HomeScreen",
  },
  {
    id: 3,
    helpTitle: "My Subscriptions",
    screen: "HomeScreen",
  },
  {
    id: 4,
    helpTitle: "Message Settings",
    screen: "HomeScreen"
  },
  {
    id: 5,
    helpTitle: "Sign Out",
    screen: "LoadingScreen"
  }
];

const CustomDrawerContent = ({ navigation, onClose }) => {

  let helpData = Object.keys(helpLinks);

  const top = new Animated.ValueXY({x: 200, y: 0});

  Animated.timing(top, {
    duration: 400,
    toValue: 0,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.container}>
      <ModalHeader text={"Help"} />
      <Modal
        animationType="fade"
        onRequestClose={onClose}
        transparent
        visible={true}
      >
    
            <ModalBackdrop style={styles.close} onPress={onClose} />
          <View style={styles.drawerNav}>
            <Animated.View style={[styles.container, { top }]}>
              {helpLinks.map(link => {
                let separator = null;
                if (helpLinks.length !== link.index + 1) {
                  separator = <View style={styles.separator} />;
                }
                return (
                  <React.Fragment key={link.id}>
                    <View style={styles.link}>
                      <Text style={{ color: "white", fontSize: 18 }} onPress={() => navigation.navigate(link.screen)}>
                        {link.helpTitle}
                      </Text>
                    </View>
                  </React.Fragment>
                );
              })}
            </Animated.View>
          </View>
   
      </Modal>
      <View style={styles.containerVersion}>
        <Text>1.0.0</Text>
      </View>
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      backgroundColor:"#333333",
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
      height: height,
      marginTop: 96,
      justifyContent: "space-evenly",
      fontSize: 24,
    },
    link: {
      lineHeight: 2,
      marginLeft: 24,
      marginTop: 72
    }
  });


export default CustomDrawerContent;
