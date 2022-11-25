import { StyleSheet, Dimensions } from "react-native";
import { device } from "../../Constants";

// minimum window hieght so keyboard does not push content up
const minWindowHeight = Math.round(Dimensions.get("window").height);
const { width, height } = Dimensions.get("screen");
export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    minHeight: minWindowHeight,
    marginLeft: 0,
    marginTop: 0,
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
    marginHorizontal: 30,
    alignSelf: "center"
  },
  button: {
    backgroundColor: "#333",
    marginVertical: 10,
    alignSelf:'center',
   
    height: 48,
    width: 300,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#2afbff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonGoogle: {
    flexDirection: "row",
    backgroundColor: "white",
   alignSelf:'center',
    marginTop: 20,
    height: 48,
    width: 300,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#c5c5c5",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  googleBtnText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
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
  image: { width: width - 80, height: 90, marginLeft: 10, resizeMode: "contain" },
});
