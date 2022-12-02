import * as React from "react";
import PropTypes from "prop-types";
import {
  Linking,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { device, fonts } from "../../Constants";

// components
import RequestRideType from "../../Components/RequestRideType";
import SelectRideType from "../../Components/SelectRideType";
import TouchIcon from "../../Components/TouchIcon";
import TouchText from "../../Components/TouchText";
import WhereTo from "../../Components/WhereTo";
import CircleMenu from "../../Components/CircleMenu/CircleMenu";

// icons
import SvgCheckShield from "../../Components/icons/Svg.CheckShield";
import SvgMenu from "../../Components/icons/Svg.Menu";
import SvgQRCode from "../../Components/icons/Svg.QRCode";

const { PROVIDER_GOOGLE } = MapView;

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

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const [type, setType] = React.useState("car");
  const [selectType, setSelectType] = React.useState(false);
  const [showMap, setShowMap] = React.useState(false);
  const [coordinates, setCoords] = React.useState({ lat: null, lon: null });
  const [kwInput, setKwInput] = React.useState("");
  const [destination, setDestnation] = React.useState(null);

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
          mapType="mutedStandard"
          style={styles.map}
    loadingBackgroundColor={"#000080"}
    loadingEnabled
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

      {type === "bike" && (
        <View style={styles.rightContainer}>
          <View style={styles.icons}>
            <TouchIcon
              icon={<SvgQRCode />}
              iconSize={32}
              onPress={() => navigation.navigate("ModalQRCode")}
              style={[styles.iconButtonDark, styles.iconQRCode]}
            />
            <TouchIcon
              icon={<SvgCheckShield />}
              iconSize={32}
              onPress={() => navigation.navigate("ModalTutorialBike")}
              style={[styles.iconButtonLight, styles.iconShield]}
            />
          </View>
        </View>
      )}

      <View style={styles.header}>
        <TouchIcon
          icon={<SvgMenu />}
          iconSize={32}
          onPress={() => navigation.toggleDrawer()}
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

      {type === "car" && <WhereTo />}

      <CircleMenu />
    </View>
  );
};

HomeScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: height,
    position: "absolute",
    width: width,
    margin: 0,
    marginTop: 35,
    padding: 0,
    resizeMode: "cover",
  },
  containerNoLocation: {
    alignItems: "center",
    height: device.height,
    justifyContent: "center",
    position: "absolute",
    width: device.width,
  },
  textLocationNeeded: {
    
    fontSize: 16,
    marginBottom: 16,
  },
  btnGoTo: {
    backgroundColor: "#000000",
    borderRadius: 3,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  btnGoToText: {
    color: "white",
    fontSize: 16,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: device.iPhoneNotch ? 58 : 50,
  },
  help: {
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
    top: height / 2,
    width: 40,
    height: 100
    
  },
  iconButtonDark: {
    borderRadius: 18,
    height: 36,
    shadowColor: "#000080",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    width: 36,
    marginVertical: 16,
    backgroundColor: "#000080"
  },
  iconButtonLight: {
    borderRadius: 18,
    height: 36,
    shadowColor: "#000000",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    width: 36,
    marginVertical: 16,
    backgroundColor: "#ffffff"
  },
  iconQRCode: {
   marginTop: 100,
   backgroundColor: "#000080"
  },
  iconShield: {
    marginTop: 100,
    backgroundColor: "#ffffff",
  },
});

export default HomeScreen;
