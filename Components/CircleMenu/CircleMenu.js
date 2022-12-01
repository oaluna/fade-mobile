import React, { Component } from "react";
import {
  Animated,
  TouchableHighlight,
  View,
  Dimensions,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
const SIZE = 64;
const { width, height } = Dimensions.get("screen");

const CircleMenu = () => {
  const mode = new Animated.Value(0);
  const toggleView = () => {
    Animated.timing(mode, {
      toValue: mode._value === 0 ? 1 : 0,
      duration: 300,
    }).start();
  };

  const firstX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [20, -60],
  });
  const firstY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });
  const secondX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 10],
  });
  const secondY = mode.interpolate({
    inputRange: [0, 10],
    outputRange: [0, -800],
  });
  const thirdX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 80],
  });
  const thirdY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -50],
  });
  const fourthX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 120],
  });
  const fourthY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0],
  });
  const fifthX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100],
  });
  const fifthY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0],
  });
  const opacity = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  return (
    <View
      style={{
        position: "absolute",
        top: height - 200,
        alignItems: "center",
        alignSelf: "center",
        verticalAlign: "bottom",
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          left: firstX,
          top: firstY,
          opacity,
        }}
      >
        <Text style={styles.label}>Join</Text>
        <TouchableHighlight onPress={() => {}} style={styles.circleMenuButton}>
          <Image
            source={require("../../assets/images/icon-carpool.png")}
            size={16}
            color="#2afbff"
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
        </TouchableHighlight>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          left: secondX,
          top: secondY,
          opacity,
        }}
      >
        <Text style={styles.label}>Schedule</Text>
        <TouchableHighlight onPress={() => {}} style={styles.circleMenuButton}>
          <Image
            source={require("../../assets/images/icon-calendar.png")}
            size={16}
            color="#2afbff"
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
        </TouchableHighlight>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          left: thirdX,
          top: thirdY,
          opacity,
        }}
      >
        <Text style={styles.label}>Favorite</Text>
        <TouchableHighlight onPress={() => {}} style={styles.circleMenuButton}>
          <Image
            source={require("../../assets/images/icon-subscribed.png")}
            size={16}
            color="#2afbff"
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
        </TouchableHighlight>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          left: fourthX,
          top: fourthY,
          opacity,
        }}
      >
        <Text style={styles.label}>Account</Text>
        <TouchableHighlight onPress={() => {}} style={styles.circleMenuButton}>
          <Image
            source={require("../../assets/images/icon-account.png")}
            size={16}
            color="#2afbff"
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
        </TouchableHighlight>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          left: fifthX,
          top: fifthY,
          opacity,
        }}
      >
        <Text style={styles.label}>Create</Text>
        <TouchableHighlight onPress={() => {}} style={styles.circleMenuButton}>
          <Image
            source={require("../../assets/images/icon-plus.png")}
            size={16}
            color="#2afbff"
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
        </TouchableHighlight>
      </Animated.View>
      <TouchableHighlight
        onPress={toggleView}
        underlayColor="darkblue"
        style={styles.menuCircle}
      >
        <Animated.View
          style={{
            transform: [{ rotate: rotation }],
          }}
        >
          <Image
            source={require("../../assets/images/app-icon.png")}
            style={styles.circleMenuItem}
          />
        </Animated.View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    color: "#000080",
    backgroundColor: "#ffffff",
    position: "relative",
    alignSelf: "center",
    textAlign:"center",
    marginTop: 45,
    marginLeft: 0,
    width: SIZE / 1.5,
    fontWeight: "800",
  },
  circleMenuButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: SIZE / 1.5,
    height: SIZE / 1.5,
    borderRadius: SIZE,
    backgroundColor: "#000080",
    elevation: 1,
  },
  circleMenuItem: {
    resizeMode: "contain",
    width: 36,
    height: 36,
  },
  menuCircle: {
    alignItems: "center",
    justifyContent: "center",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: "#000080",
    elevation: 2,
  },
});

export default CircleMenu;
