import { FontAwesome } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import {CircleMenu} from "../Components/CircleMenu/CircleMenu";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import LoadingScreen from "../Screens/LoadingScreen/LoadingScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen/RegisterScreen";
import LocationAccess from "../Screens/LocationAccess/LocationAccess";
import DemoScreen from "../Screens/DemoScreen/DemoScreen";
import SearchScreen from "../Screens/SearchScreen/SearchScreen";

const Drawer = createDrawerNavigator();

function TabBottom() {
  return (
    <Drawer.Navigator
      name={CircleMenu}
      screenOptions={{
        headerShown: false, // hide labels
        tabBarActiveTintColor: "#F8F8F8", // active icon color: ;
        tabBarInactiveTintColor: "#586589", // inactive icon color: ;
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#171F33", // TabBar background
        },
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="DemoScreen"
        component={DemoScreen}
        options={{
          tabBarIcon: ({ color, size }) => <CircleMenu />,
        }}
      />
      <Drawer.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="lock" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default TabBottom;