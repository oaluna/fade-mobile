import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// drawer stack
import DrawerStack from "./DrawerStack";
import TabBottom from "./TabStack";
// screens
import ModalHelp from "../Screens/ModalHelp/ModalHelp";
import ModalQRCode from "../Screens/ModalQRCode/ModalQRCode";
import ModalTutorialBike from "../Screens/ModalTutorialBike/ModalTutorialBike";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default () => (
  <React.Fragment>
    <Stack.Navigator
      screenOptions={[
        globalScreenOptions,
        {
          presentation: "fullScreenModal",
        },
      ]}
    >
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TabBottom"
        component={TabBottom}
        options={{ headerShown: "false" }}
      />

      <Stack.Screen
        name="ModalHelp"
        component={ModalHelp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ModalQRCode"
        component={ModalQRCode}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ModalTutorialBike"
        component={ModalTutorialBike}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </React.Fragment>
);
