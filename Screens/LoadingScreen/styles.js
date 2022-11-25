import { StyleSheet, Dimensions } from "react-native";
import { device, fonts } from "../../Constants";

// minimum window hieght so keyboard does not push content up
const { width, height } = Dimensions.get("screen");
export default StyleSheet.create({
  container: {
    alignSelf: "center",
    width: width,
    height: height,
    backgroundColor: "white",
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    height: 48,
    width: 300,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "rgba(200,200,200,0.85)",
    marginVertical: 10,
    marginHorizontal: 15,
    fontFamily: require('../../assets/fonts/Comfortaa-Regular.ttf'),
  },
  button: {
    backgroundColor: "#333",
    marginVertical: 40,
    alignSelf: "center",
    height: 48,
    width: 360,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#2afbff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTitle: {
    color: "white",
    fontSize: 24,
    fontFamily: fonts.comfortaaBold,
    textTransform: 'uppercase'
  },
  googleBtnText: {
    color: "black",
    fontSize: 24,
    fontFamily: fonts.comfortaaBold,
    marginLeft: 10,
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
  headLine: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginVertical: 25,
    fontWeight: "800",
  },
  image: { width: width - 80, height: 90, marginLeft: 30, marginBottom: 400 },
  buttonGoogle: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 105,
    alignSelf: "center",
    height: 48,
    width: 350,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#2afbff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20
  }
});
