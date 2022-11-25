import { StyleSheet, Dimensions } from "react-native";
import { device } from '../../Constants'

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    height: device.height,
    width: device.width,
    marginBottom: 0,
    padding: 0,
  },
  header: {
    fontSize: 20,
    marginLeft: 40,
    marginTop: 50,
    color: "#ffffff",
  },
  image: {
    width: 300,
    height: 90,
    marginLeft: 40,
    marginTop: 200,
  },
  form: {
    backgroundColor: "rgba(155,155,155,1)",
    height: 550,
    width: 350,
    marginHorizontal: 12,
    marginVertical: 45,
    paddingHorizontal: 25,
  },
  formField: {
    borderBottomColor: "#2afbff",
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  textInput: {
    color: "#ffffff",
  },
  submitBtn: {
    width: 300,
    backgroundColor: "#000000",
    height: 50,
    textAlign: "center",
    marginTop: 15,
    display: "flex",
    alignItems: "center",
    padding: 10,
    borderRadius: 25,
    elevation: 3,
    borderColor: "#2afbff",
    borderWidth: 1,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 24,
  },
  socials: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: width,
    marginVertical: 15,
  },
  googleBtn: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 32,
    height: 32,
    padding: 0,
    marginVertical: 10,
    marginHorizontal: 35,
    elevation: 1,
  },
  facebookBtn: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 32,
    height: 32,
    padding: 0,
    marginVertical: 10,
    marginHorizontal: 35,
    elevation: 1,
  },
  twitterBtn: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 32,
    height: 32,
    padding: 0,
    marginVertical: 10,
    marginHorizontal: 35,
    elevation: 1,
  },
});

export default styles;