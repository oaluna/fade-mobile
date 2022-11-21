import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  Pressable,
  Animated
} from "react-native";
const font = require("../../assets/fonts/Comfortaa/static/Comfortaa-Light.ttf");

import React from "react";

const { height, width } = Dimensions.get("screen");

const LoadingScreen = ({ navigation }) => {
  const [imgMarginTop, setImgMarginTop] = React.useState(new Animated.Value(350))

  React.useEffect(()=> {
    Animated.timing(imgMarginTop, { toValue: 200 }).start()
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/12491566/pexels-photo-12491566.jpeg",
        }}
        style={{ resizeMode: "cover", height: height, width: width }}
      >
        <Animated.Image
          source={{
            uri: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1668379250/fade-logo_dr02kn.png",
          }}
          style={[styles.image, {marginTop: imgMarginTop}]}
        />
        <View style={styles.getStartedButton}>
          <Pressable onPress={() => navigation.navigate("register")}>
            <Text style={styles.text}>Get Started</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    marginTop: 0,
  },
  textBody: {
    fontSize: 24,
  },
  image: {
    width: 300,
    height: 90,
    marginLeft: 40,
  },
  getStartedButton: {
    marginTop: 400,
    height: 70,
    backgroundColor: "#222222",
    borderWidth: 1,
    borderColor: "#2afbff",

    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    color: "#2afbff",
    fontSize: 32,
    lineHeight: 32,
    fontWeight: "light",
    letterSpacing: 0.25,
    color: "white",
  },
});
