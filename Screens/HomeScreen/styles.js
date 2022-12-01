import { StyleSheet, Dimensions } from "react-native";
import { device, fonts } from "../../Constants";

// minimum window hieght so keyboard does not push content up
export const minWindowHeight = Math.round(Dimensions.get("window").height);
export const windowWidth = Math.round(Dimensions.get("window").width);
const {height, width} = Dimensions.get('screen');

