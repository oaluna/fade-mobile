import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import { device } from "../../Constants";
import { AnimatedBackgroundColorView } from "react-native-animated-background-color-view";

import React from "react";

const { width, height } = Dimensions.get("screen");

const RegisterScreen = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/12491566/pexels-photo-12491566.jpeg",
        }}
        style={{ width: width, height: height, resizeMode: "cover" }}
      >
        <Image
          source={require("../../assets/images/fade-logo.png")}
          style={styles.image}
        />
        <View style={styles.form}>
          <View>
            <Text style={styles.header}>Start carpooling with Fade today!</Text>
          </View>
          <View style={styles.formField}>
            <View className={styles.textInput}>
              <TextInput placeholder="First Name" />
            </View>
          </View>
          <View style={styles.formField}>
            <View className={styles.textInput}>
              <TextInput placeholder="Last Name" />
            </View>
          </View>
          <View style={styles.formField}>
            <View className={styles.textInput}>
              <TextInput placeholder="Email Address" />
            </View>
          </View>
          <View style={styles.formField}>
            <View className={styles.textInput}>
              <TextInput placeholder="Password" />
            </View>
          </View>
          <View style={styles.formField}>
            <View className={styles.textInput}>
              <TextInput placeholder="Confirm Password" />
            </View>
          </View>
          <View>
            <Pressable style={styles.submitBtn}>
              <Text style={styles.btnText}>Register</Text>
            </Pressable>
          </View>
          <View>
            <Text
              style={{ textAlign: "center", color: "white", marginVertical: 8 }}
            >
              OR
            </Text>
          </View>
          <Text style={{ fontSize: 12, textAlign: "center" }}>
            Register with one of these accounts
          </Text>
          <View style={styles.socials}>
            <Pressable style={styles.googleBtn}>
              <Image
                source={require("../../assets/images/google-icon.png")}
                style={{ resizeMode: "contain", width: 32, height: 32 }}
              />
            </Pressable>
            <Pressable style={styles.facebookBtn}>
              <Image
                source={require("../../assets/images/facebook-icon.png")}
                style={{ resizeMode: "contain", width: 32, height: 32 }}
              />
            </Pressable>
            <Pressable style={styles.twitterBtn}>
              <Image
                source={require("../../assets/images/twitter-icon.png")}
                style={{ resizeMode: "contain", width: 32, height: 32 }}
              />
            </Pressable>
          </View>
        </View>
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
    fontSize: 20,
    marginLeft: 40,
    marginTop: 50,
    color: "#ffffff",
  },
  image: {
    width: 300,
    height: 90,
    marginLeft: 40,
    marginTop: 200,
  },
  form: {
    backgroundColor: "rgba(155,155,155,1)",
    height: 550,
    width: 350,
    marginHorizontal: 12,
    marginVertical: 45,
    paddingHorizontal: 25,
  },
  formField: {
    borderBottomColor: "#2afbff",
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  textInput: {
    color: "#ffffff",
  },
  submitBtn: {
    width: 300,
    backgroundColor: "#000000",
    height: 50,
    textAlign: "center",
    marginTop: 15,
    display: "flex",
    alignItems: "center",
    padding: 10,
    borderRadius: 25,
    elevation: 3,
    borderColor: "#2afbff",
    borderWidth: 1,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 24,
  },
  socials: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: width,
    marginVertical: 15,
  },
  googleBtn: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 32,
    height: 32,
    padding: 0,
    marginVertical: 10,
    marginHorizontal: 35,
    elevation: 1,
  },
  facebookBtn: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 32,
    height: 32,
    padding: 0,
    marginVertical: 10,
    marginHorizontal: 35,
    elevation: 1,
  },
  twitterBtn: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 32,
    height: 32,
    padding: 0,
    marginVertical: 10,
    marginHorizontal: 35,
    elevation: 1,
  },
});

export default RegisterScreen;
