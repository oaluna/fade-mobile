import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import { device } from "../../Constants";
import { AnimatedBackgroundColorView } from "react-native-animated-background-color-view";
import styles from "./styles";

const { width, height } = Dimensions.get("screen");

const RegisterScreen = ({navigation}) => {
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
            <Pressable
              style={styles.submitBtn}
              onPress={() => navigation.navigate("HomeScreen")}
            >
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

export default RegisterScreen;
