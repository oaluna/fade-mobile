import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import RootStack from "./Navigation/RootStack";

import { func } from "./Constants";

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  React.useEffect(() => {
    async function prepare() {
      try {
        // keeps the splash screen visible while assets are cached
        await SplashScreen.preventAutoHideAsync();

        // pre-load/cache assets: images, fonts, and videos
        await func.loadAssetsAsync();
      } catch (e) {
        // console.warn(e);
      } finally {
        // loading is complete
        setIsLoading(false);
      }
    }

    prepare();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator ScreenOption={globalScreenOptions}>
          {/* <Stack.Screen
            name="splash"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="demo"
            component={DemoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="locationAccess"
            component={LocationAccess}
            options={{ title: "Location Access" }}
          />
          <Stack.Screen
            name="login"
            options={{ headerShown: false }}
            component={LoginScreen}
          /> 
          <Stack.Screen
            name="home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="search"
            options={{ headerShown: false }}
            component={SearchScreen}
          />
          <Stack.Screen
            name="register"
            options={{ headerShown: false }}
            component={RegisterScreen}
          />  */}
      

      <RootStack />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
