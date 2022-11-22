import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import LoadingScreen from "../Screens/LoadingScreen/LoadingScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen/RegisterScreen";
import LocationAccess from "../Screens/LocationAccess/LocationAccess";
import DemoScreen from "../Screens/DemoScreen/DemoScreen";
import SearchScreen from "../Screens/SearchScreen/SearchScreen";

// components
import CustomDrawerContent from "../Components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator
    drawerContent={CustomDrawerContent}
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen
      name="splash"
      component={LoadingScreen}
      options={{ headerShown: false }}
    />
    <Drawer.Screen
      name="demo"
      component={DemoScreen}
      options={{ headerShown: false }}
    />
    <Drawer.Screen
      name="locationAccess"
      component={LocationAccess}
      options={{ title: "Location Access" }}
    />
    <Drawer.Screen
      name="login"
      options={{ headerShown: false }}
      component={LoginScreen}
    />
    <Drawer.Screen
      name="home"
      options={{ headerShown: false }}
      component={HomeScreen}
    />
    <Drawer.Screen
      name="search"
      options={{ headerShown: false }}
      component={SearchScreen}
    />
    <Drawer.Screen
      name="register"
      options={{ headerShown: false }}
      component={RegisterScreen}
    />
  </Drawer.Navigator>
);
