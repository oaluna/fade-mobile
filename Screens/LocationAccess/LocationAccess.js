import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import * as Location from "expo-location";

const LocationAccess = ({ navigation, route }) => {
  const [location, setLocation] = useState(null);
  const [error, errorMessage] = useState(null);
  const [geocode, setGeoCode] = useState(null);
  const [btnDisabled, setEnabled] = useState(true);
  useEffect(() => {
    // code to set the header
    const unsbuscribe = navigation.setOptions({
      headerBacktitle: "Location Access",
      headerStyle: {
        backgroundColor: "#2afbff",
      },
      headerTintColor: "#1f3559",
      headerTitleStyle: {
        fontWeight: "bold",
        marginLeft: 15,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("DemoScreen")}>
          <AntDesign
            name="leftcircle"
            size={30}
            color="#1f3559"
            style={{
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      ),
    });
    return () => {
      unsbuscribe;
    };
  }, []);

  const getLocationAsync = async () => {
    // helper method to request Location from device
    // sets geoCode, locaiton, errorMessage if there is any
    let { status } = await Location.getCurrentPositionAsync(location);
    if (status !== "granted") {
      errorMessage({
        error: "Permission to access location was denied",
      });
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    const { latitude, longitude } = location.coords;
    getGeocodeAsync({ latitude, longitude });
    setLocation({ location: { latitude, longitude } });
    // navigate to home screen once access is granted.
    // pass location in route params.
    navigation.navigate("RegisterScreen", { location: location });
  };

  const getGeocodeAsync = async (location) => {
    // Get the location from device
    let geocode = await Location.reverseGeocodeAsync(location);
    setGeoCode({ geocode });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={[styles.image, { width: 350, height: 350}]}
        source={require('../../assets/images/phone.png')}
      />
      <Text style={styles.logoTitle}>
        Fade needs you to grant Location Access to function correctly.
      </Text>
      <Text style={styles.logoSubTitle}>
        This is how we match you up with other Fade drivers/riders using similar routes as your own.
      </Text>
      <View style={{ bottom: 0, position: "absolute", marginBottom: 10 }}>
        {/* x if location is not enabled, check if it is enabled */}
        {/* Need more logic to onclick give location acess */}
        <TouchableOpacity
          style={styles.buttonOpacity}
          i
          onPress={() => alert("please enable Location in device settings")}
          raised
          title="Register"
        >
          <Text style={styles.buttonTitle}>
            {location ? (
              <FontAwesome
                name="check-circle"
                style={{ marginRight: 10 }}
                size={20}
                color="#1ba895"
              />
            ) : (
              <AntDesign
                name="closecircle"
                style={{ marginRight: 10 }}
                size={20}
                color="darkred"
              />
            )}
            Don't Share My Location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => getLocationAsync()}
          raised
          title="Register"
        >
          <Text style={styles.buttonTitle}>Share my Location</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LocationAccess;
