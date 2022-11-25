import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import CustomSlider from "./Components/CustomSlider";
import styles from "./styles";
import sliderContent from "./slides";


const DemoScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      {/* slider */}
      <CustomSlider sliderContent={sliderContent} />
      <View style={{ bottom: 0, position: "absolute", marginBottom: 10 }}>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => navigation.navigate("locationAccess")}
          raised
          title="Register"
        >
          <Text style={styles.startBtnText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("LoginScreen")}
          raised
          title="Register"
        >
          <Text style={styles.loginBtnText}>Already Signed Up?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DemoScreen;
