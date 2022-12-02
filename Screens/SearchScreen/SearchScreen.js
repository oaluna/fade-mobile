import React, { useState } from "react";
import {
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  View,
} from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import styles from "./styles";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import RequestRideType from "../../Components/RequestRideType";
import SelectRideType from "../../Components/SelectRideType";
import TouchIcon from "../../Components/TouchIcon";
import TouchText from "../../Components/TouchText";

const { PROVIDER_GOOGLE } = MapView;

const SearchScreen = ({ navigation, route }) => {
  // For later use to track user selected destinations
  const [showMap, setShowMap] = React.useState(false);
  const [coordinates, setCoords] = React.useState({ lat: null, lon: null });

  const [kwInput, setKwInput] = useState("");
  const [destination, setDestnation] = useState(null);

  React.useEffect(() => {
    const getLocation = async () => {
      // get exisiting locaton permissions first
      const { status: existingStatus } =
        await Location.requestForegroundPermissionsAsync();
      let finalStatus = existingStatus;

      // ask again to grant locaton permissions (if not already allowed)
      if (existingStatus !== "granted") {
        const { status } = await Location.requestForegroundPermissionsAsync();
        finalStatus = status;
      }

      // still not allowed to use location?
      if (finalStatus !== "granted") {
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync();

      setCoords({ lat: coords.latitude, lon: coords.longitude });
      setShowMap(true);
    };

    getLocation().catch(console.error);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <GooglePlacesAutocomplete
        placeholder="Where to?"
        fetchDetails={true}
        renderLeftButton={() => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={35}
              color="gray"
              style={styles.goBack}
            />
          </TouchableOpacity>
        )}
        styles={{
          textInput: styles.textInputCustom,
          listView: styles.listViewCustom,
          description: styles.descriptionCustom,
          row: styles.rowCustom,
          powered: styles.poweredCustom,
          poweredContainer: styles.poweredContainerCustom,
        }}
        // not working for some reason, it is just a 16 days sprint no need to debug it
        textInputProps={{
          autoFocus: true,
        }}
        onPress={(data, details = null) => {
          setDestnation({ value: { data, details } });
          navigation.navigate("HomeScreen", {
            userDestination: { details },
            location: route?.params?.location,
          });
        }}
        query={{
          key: "AIzaSyAbTRvjdd77iNZaSRPkR9BlwwWObK6czAc",
          language: "en",
        }}
      />
      {showMap && (
        <MapView
          followsUserLocation
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: coordinates.lat,
            longitude: coordinates.lon,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation
          mapType="mutedStandard"
          style={styles.map}
        />
      )}
      {!showMap && (
        <View style={styles.containerNoLocation}>
          <Text style={styles.textLocationNeeded}>
            We need your location data...
          </Text>
          <TouchText
            onPress={() => Linking.openURL("settings:")}
            style={styles.btnGoTo}
            styleText={styles.btnGoToText}
            text="Go To Permissions"
          />
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default SearchScreen;
