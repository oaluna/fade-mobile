import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

import { Avatar, Input } from "react-native-elements";
//import { auth } from "../../firebase";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import styles from "./styles";
//import * as GoogleSignIn from 'expo-google-sign-in';

//import Google from "expo-auth-session/providers/google";

const { height, width } = Dimensions.get("screen");

// const { request, response, promptAsync } = Google.useAuthRequest({
//   expoClientId:
//     "259326988048-kdhvj58ha5usgddhjqefu0am59igk8f7.apps.googleusercontent.com",
//   iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
//   androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
//   webClientId:
//     "259326988048-gd608jssm8gp1ko1q4iqqi37jc1cht5a.apps.googleusercontent.com",
// });

function LoginScreen({navigation}) {
   const [email, setEmail] = React.useState("");
   const [password, setPassword] = React.useState("");


  // const [isAndroid, setIsAndroid] = React.useState(null);

  // React.useEffect(() => {
  //   if (response?.type === "success") {
  //     const { authentication } = response;
  //   }
  // }, [response]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[{ width: width, height: height }, styles.container]}
    >
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/12491566/pexels-photo-12491566.jpeg",
        }}
        style={{ resizeMode: "cover", height: height, width: width }}
      >
        <View
          style={{
            width: width,
            height: height,
            backgroundColor: "rgba(0,0,0,0.4)",
            position: "absolute",
            bottom: 0,
          }}
        >
          <View style={{ marginTop: 250, alignItems: "center" }}>
            <Image
              style={styles.image}
              source={require("../.././assets/images/fade-logo.png")}
            />
            <Text style={styles.headLine}>Welcome back!</Text>
          </View>
          <Input
            placeholder="Email"
            autoFocus
            blurOnSubmit
            name="email"
            leftIcon={
              <MaterialIcons name="mark-email-read" size={24} color="gray" />
            }
            type="email"
            containerStyle={styles.input}
            onChangeText={(e) => setEmail(e)}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            blurOnSubmit
            underlineColorAndroid="transparent"
            name="password"
            type="password"
            leftIcon={<MaterialIcons name="lock" size={24} color="gray" />}
            containerStyle={styles.input}
            onChangeText={(p) => setPassword(p)}
          />

          <TouchableOpacity
            style={[styles.button, { marginTop: 125 }]}
            onPress={() => {navigation.navigate("HomeScreen")}}
          >
            <Text style={styles.buttonTitle}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#2AFBFF"}]}
            onPress={() => navigation.navigate("RegisterScreen")}
            type="outline"
            title="Register"
          >
            <Text style={[styles.buttonTitle, { color: 'black', fontSize: 20}]}>Don't have an account?</Text>
          </TouchableOpacity>
          {/* {isAndroid && ( */}
            <View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#ffffff",
                    height: 2,
                    flex: 1,
                    alignSelf: "center",
                    marginLeft: 45,
                  }}
                />
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#f5f5f5",
                    paddingHorizontal: 5,
                    fontSize: 24,
                  }}
                >
                  OR
                </Text>
                <View
                  style={{
                    backgroundColor: "#ffffff",
                    height: 2,
                    flex: 1,
                    alignSelf: "center",
                    marginRight: 45,
                  }}
                />
              </View>

              <TouchableOpacity
                style={styles.buttonGoogle}
                onPress={() => {}}
                type="outline"
                title="Register"
              >
                <Image
                  source={require("../../assets/images/google-icon.png")}
                  style={{ resizeMode: "contain", width: 32, height: 32 }}
                />
                <Text style={styles.googleBtnText}> Log in with Google</Text>
              </TouchableOpacity>
            </View>
          {/* )} */}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
