import { useFonts } from "expo-font";


export default function fonts() {
  const [loadedFonts] = useFonts({
    "Comfortaa-Light": require("../assets/fonts/Comfortaa/Comfortaa-Light.ttf"),
    "Comfortaa-Regular": require("../assets/fonts/Comfortaa/Comfortaa-Regular.ttf"),
    "Comfortaa-Medium": require("../assets/fonts/Comfortaa/Comfortaa-Medium.ttf"),
    "Comfortaa-SemiBold": require("../assets/fonts/Comfortaa/Comfortaa-SemiBold.ttf"),
    "Comfortaa-Bold": require("../assets/fonts/Comfortaa/Comfortaa-Bold.ttf"),
  });
  return [loadedFonts];
}
