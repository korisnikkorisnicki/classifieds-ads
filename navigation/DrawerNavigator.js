import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainDrawer from "../components/UI/MainDrawer";
import AdsNavigator from "./AdsNavigator";

import Font from "../constants/Font";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

function ScreenA() {
  return (
    <View>
      <Text>SCREEN A</Text>
    </View>
  );
}

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <MainDrawer {...props} />}
        useLegacyImplementation={true}
        screenOptions={{
          drawerStyle: {
            backgroundColor: Colors.drawer,
          },
          sceneContainerStyle: {
            backgroundColor: Colors.stackBackground,
          },
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.accent,
          drawerInactiveTintColor: Colors.accent,
          drawerActiveTintColor: Colors.accent,
          drawerActiveBackgroundColor: Colors.primary,
          drawerLabelStyle: {
            fontSize: Font.drawerSize,
          },
        }}
      >
        <Drawer.Screen name="ScreenA" component={ScreenA} />
        <Drawer.Screen name="AdsNavigator" component={AdsNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
