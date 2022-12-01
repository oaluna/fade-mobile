import { useFonts, loadAsync } from "expo-font";
 

export default () => {
  const fonts = loadAsync({
    "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
    "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
    "Comfortaa-Medium": require("../assets/fonts/Comfortaa-Medium.ttf"),
    "Comfortaa-SemiBold": require("../assets/fonts/Comfortaa-SemiBold.ttf"),
    "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
  });
  return fonts;
};
