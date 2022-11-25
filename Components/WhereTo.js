import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Dimensions,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import { device, fonts } from "../Constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// icons
const { height, width } = Dimensions.get("screen");

const WhereTo = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState("");
  const [kwInput, setKwInput] = React.useState("");
  const [destination, setDestnation] = React.useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <View style={styles.containerSquare}>
          <View style={styles.square} />
        </View>

       <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <GooglePlacesAutocomplete
            placeholder="Where to ?"
            fetchDetails={true}
            styles={{
              textInput: styles.textInputCustom,
              listView: styles.listViewCustom,
               description: styles.descriptionCustom,
              row: styles.rowCustom,
              powered: styles.poweredCustom,
              poweredContainer: styles.poweredContainerCustom,
            }}
           textInputProps={{
              autoFocus: true,
              position:'absolute',
              width:200,
              top: -120, left: 50
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
        </KeyboardAvoidingView>
        <Divider style={{ marginLeft: 200 }} />
        <View style={styles.containerIcon}>
          <Image
            source={require("../assets/images/icon-dropoff.png")}
            style={{ width: 32, height: 32 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    top: device.iPhoneNotch ? 144 : 120,
    width: device.width - 40
  },
  containerBanner: {
    backgroundColor: 'green',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  bannerText: {
    color: 'white',
    fontFamily: fonts.comfortaaMedium,
    fontSize: 12
  },
  bannerMuted: {
    color: 'mint',
    fontFamily: fonts.comfortaaMedium,
    fontSize: 12
  },
  containerInput: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 48,
    elevation: 2,
  },
  containerSquare: {
    alignItems: 'center',
    flex: 2
  },
  square: {
    backgroundColor: 'black',
    height: 8,
    width: 8
  },
  text: {
    color: 'darkgrey',
    flex: 8,
    fontFamily: fonts.comfortaaMedium,
    fontSize: 20
  },
  containerIcon: {
    alignItems: 'center',
    borderLeftColor: 'grey',
    borderLeftWidth: 1,
    flex: 2
  }, 
  listViewCustom: {
    marginTop: -75,
    borderTopColor:'lightgrey',
    borderTopWidth: 0.67,
    elevation: 2,
  }
});

export default WhereTo;
