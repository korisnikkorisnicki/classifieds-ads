import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainDrawer from "../components/UI/MainDrawer";
import HomeScreen from "../screens/HomeScreen";
// import CategoriesScreen from "../screens/categories/CategoriesScreen";
// import AdsNavigator from "./AdsNavigator";
import TabBottomNavigator from "./BottomTabNavigator";
import CategoriesScreen from "../screens/categories/CategoriesScreen";
import LoginScreen from "../screens/authentication/LoginScreen";
import RegisterScreen from "../screens/authentication/RegisterScreen";

import Font from "../constants/Font";
// import SafeArea from "../components/UI/SafeArea";
// import SafeAreaTwo from "../components/UI/SafeAreaTwo";
import { MainContextProvider } from "../context/main-context";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const Colors = useSelector((state) => state.ui.colors);

  return (
    <MainContextProvider>
      {/* <SafeArea showHeader={true}> */}
      <NavigationContainer>
        <Drawer.Navigator
          useLegacyImplementation={true}
          screenOptions={{
            swipeEnabled: false,
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
            headerShown: false,
          }}
          drawerContent={(props) => <MainDrawer {...props} />}
        >
          <Drawer.Screen
            name="TabBottomNavigator"
            component={TabBottomNavigator}
          />
          <Drawer.Screen
            name="Categories"
            options={{ drawerItemStyle: { display: "none" } }}
            component={CategoriesScreen}
          />
          <Drawer.Screen
            name="SubCategories"
            options={{ drawerItemStyle: { display: "none" } }}
            component={CategoriesScreen}
          />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen
            name="Register"
            component={RegisterScreen}
            options={{ drawerItemStyle: { display: "none" } }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      {/* </SafeArea> */}
    </MainContextProvider>
  );
};

export default DrawerNavigator;
