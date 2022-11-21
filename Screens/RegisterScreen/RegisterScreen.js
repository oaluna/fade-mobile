import {
  View,
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  TextInput,
  Toast,
  StyleSheet,
  ImageBackground
} from "react-native";
import { device } from "../../Constants";
import { AnimatedBackgroundColorView } from "react-native-animated-background-color-view";

import React from "react";

const RegisterScreen = () => {
  return (
    <View>
    <ImageBackground source={require('../../assets/images/background.png')} style={{resizeMode: "cover"}}>
      <AnimatedBackgroundColorView
        color="rgba(0,0,0,0.5)"
        initialColor="rgba(0,0,0,1)"
        duration="84000"
        style={[styles.container, { backdropFilter: "blur(22px)"}]}
      >
        {/* <LinearGradient
        colors={colors}
        locations={locations}
        style={styles.overlay}
      /> */}
        <View>
          <Text style={styles.header}>Register</Text>
        </View>
        <View style={styles.form}>
          <View className={styles.textInput}>
            <TextInput placeholder="First Name" />
          </View>
        </View>
      </AnimatedBackgroundColorView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    height: device.height,
    width: device.width,
    marginBottom: 0,
    padding: 0,
    
  },
  header: {
    fontSize: 24,
    marginLeft: 150,
    marginTop: 200,
    color: "#ffffff"
  },
  form: {},
  textInput: {
    color: "#ffffff",
  },
});

export default RegisterScreen;
