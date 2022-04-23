import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainDrawer from "../components/UI/MainDrawer";
import HomeScreen from "../screens/HomeScreen";
import AdsNavigator from "./AdsNavigator";

import Font from "../constants/Font";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation={true}
        screenOptions={{
          drawerStyle: {
            backgroundColor: Colors.stackBackground,
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
          drawerActiveBackgroundColor: Colors.drawerActiveBackground,
          drawerLabelStyle: {
            fontSize: Font.drawerSize,
          },
        }}
        drawerContent={(props) => <MainDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen
          name="AdsNavigator"
          component={AdsNavigator}
          options={{ headerShown: true }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
