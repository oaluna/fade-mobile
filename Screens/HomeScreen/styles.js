import { StyleSheet, Dimensions } from "react-native";
import { device, fonts } from "../../Constants";

// minimum window hieght so keyboard does not push content up
export const minWindowHeight = Math.round(Dimensions.get("window").height);
export const windowWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: device.height,
    position: "absolute",
    width: device.width,
  },
  containerNoLocation: {
    alignItems: "center",
    height: device.height,
    justifyContent: "center",
    position: "absolute",
    width: device.width,
  },
  textLocationNeeded: {
    fontFamily: fonts.comfortaaMedium,
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
    fontFamily: fonts.comfortaaMedium,
    fontSize: 16,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: device.iPhoneNotch ? 58 : 34,
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
    width: 40,
  },
  icon: {
    borderRadius: 18,
    height: 36,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    width: 36,
  },
  iconQRCode: {
    backgroundColor: "blue",
    marginBottom: 16,
  },
  iconShield: {
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
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

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },

  mB8: { marginBottom: 8 },
  mR8: { marginRight: 8 },
  mR16: { marginRight: 16 },
  mR24: { marginRight: 24 },
  mR48: { marginRight: 48 },
  mR64: { marginRight: 64 },

  mV16: { marginVertical: 16 },
  mV24: { marginVertical: 24 },
  mV32: { marginVertical: 32 },

  p4: { padding: 4 },
  p8: { padding: 8 },
  p16: { padding: 16 },
  p24: { padding: 24 },

  pH4: { paddingHorizontal: 4 },
  pH8: { paddingHorizontal: 8 },
  pH16: { paddingHorizontal: 16 },
  pH24: { paddingHorizontal: 24 },
});

export default styles;
