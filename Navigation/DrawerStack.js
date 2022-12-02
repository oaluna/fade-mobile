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
      name="LoadingScreen"
      component={LoadingScreen}
      options={{ headerShown: false }}
    />
    <Drawer.Screen
      name="DemoScreen"
      component={DemoScreen}
      options={{ headerShown: false }}
    />
    <Drawer.Screen
      name="locationAccess"
      component={LocationAccess}
      options={{ title: "Location Access" }}
    />
    <Drawer.Screen
      name="LoginScreen"
      options={{ headerShown: false }}
      component={LoginScreen}
    />
    <Drawer.Screen
      name="HomeScreen"
      options={{ headerShown: false, title: "Home" }}
      component={HomeScreen}
    />
    <Drawer.Screen
      name="SearchScreen"
      options={{ headerShown: false }}
      component={SearchScreen}
    />
    <Drawer.Screen
      name="RegisterScreen"
      options={{ headerShown: false }}
      component={RegisterScreen}
    />
  </Drawer.Navigator>
);
