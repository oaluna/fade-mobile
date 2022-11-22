import React from "react";
import PropTypes from "prop-types";
import { Linking, StyleSheet, Text, View, Image, Dimensions } from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { device, fonts, gStyle } from "../../Constants";

// components
import PickupAddress from "../../Components/PickupAddress";
import RequestRideType from "../../Components/RequestRideType";
import SelectRideType from "../../Components/SelectRideType";
import TouchIcon from "../../Components/TouchIcon";
import TouchText from "../../Components/TouchText";
import WhereTo from "../../Components/WhereTo";

// icons
import SvgCheckShield from "../../assets/images/icon-user-shield.png";
import SvgMenu from "../../assets/images/icon-menu.png";
import SvgQRCode from "../../assets/images/icon-qr-code.png";

const { PROVIDER_GOOGLE } = MapView;

const { width, height } = Dimensions.get('screen')

const types = {
  car: {
    image: "carSm",
    imageLg: "carLg",
    text: "Ride",
  },
  bike: {
    image: "bikeSm",
    imageLg: "bikeLg",
    text: "Bike",
  },
};

const Home = ({ navigation }) => {
  const [type, setType] = React.useState("car");
  const [selectType, setSelectType] = React.useState(false);
  const [showMap, setShowMap] = React.useState(false);
  const [coordinates, setCoords] = React.useState({ lat: null, lon: null });

  React.useEffect(() => {
    const getLocation = async () => {
      // get existing location permissions first
      const { status: existingStatus } =
        await Location.requestForegroundPermissionsAsync();
      let finalStatus = existingStatus;

      // ask again to grant location permissions (if not already allowed)
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

  const toggleTypeModal = () => {
    setSelectType(!selectType);
  };

  return (
    <View style={styles.container}>
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
          style={styles.map}
        />
      )}

      {!showMap && (
        <View style={styles.containerNoLocation}>
          <Text style={styles.textLocationNeeded}>
            We need your location data...
          </Text>
          <TouchText
            onPress={() => Linking.openURL("app-settings:")}
            style={styles.btnGoTo}
            styleText={styles.btnGoToText}
            text="Go To Permissions"
          />
        </View>
      )}

      {type === "bike" && (
        <View style={styles.rightContainer}>
          <View style={styles.icons}>
            <Image
              source={require("../../assets/images/icon-qr-code.png")}
              onPress={() => navigation.navigate("ModalQRCode")}
              style={[styles.icon, styles.iconQRCode]}
            />
            <Image
              source={require("../../assets/images/icon-user-shield.png")}
              onPress={() => navigation.navigate("ModalTutorialBike")}
              style={[styles.icon, styles.iconShield]}
            />
          </View>
        </View>
      )}

      <View style={styles.header}>
        <Image
          source={require("../../assets/images/icon-menu.png")}
          onPress={() => navigation.toggleDrawer()} style={{width:32,height:32, resizeMode:'contain'}}
        />
        <RequestRideType
          image={types[type].image}
          onPress={toggleTypeModal}
          text={types[type].text}
        />

        {type === "car" && <View style={styles.placeholder} />}
        {type === "bike" && (
          <TouchText
            onPress={() => navigation.navigate("ModalHelp")}
            style={styles.help}
            text="Help"
          />
        )}
      </View>

      <SelectRideType
        data={types}
        onClose={toggleTypeModal}
        onSelect={(selectedType) => setType(selectedType)}
        visible={selectType}
      />

      {type === "car" && (
        <View>
          <View style={styles.rideInputBox}>
            <PickupAddress />
            <WhereTo />
          </View>
        </View>
      )}
    </View>
  );
};

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: height,
    position: "absolute",
    width: width,
  },
  containerNoLocation: {
    alignItems: "center",
    height: device.height,
    justifyContent: "center",
    position: "absolute",
    width: device.width,
  },
  textLocationNeeded: {
    fontFamily: fonts.uberMedium,
    fontSize: 16,
    marginBottom: 16,
  },
  btnGoTo: {
    backgroundColor: "black",
    borderRadius: 3,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  btnGoToText: {
    color: "white",
    fontFamily: fonts.uberMedium,
    fontSize: 18,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: device.iPhoneNotch ? 40 : 20,
  },
  help: {
    marginTop: 24,
    textAlign: "center",
    width: 32,
  },
  placeholder: {
    height: 32,
    width: 32,
  },
  rightContainer: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    right: 16,
    width: 40,
  },
  icon: {
    borderRadius: 24,
    height: 32,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    width: 32,
  },
  iconQRCode: {
    backgroundColor: "blue",
    marginBottom: 15,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 32,
    height: 32,
  },
  iconShield: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    top: 15,
    width: 32,
    height: 32,
  },
  rideInputBox: {
    marginTop: 45,
    position:'relative',
    paddingVertical:5,
    backgroundColor: "transparent",
    height: 145,
  },
  activeOpacity: 0.7,

  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  flexRowSpace: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navHeaderStyle: {
    backgroundColor: "black",
    borderBottomWidth: 0,
    elevation: 0,
  },
});

export default Home;
