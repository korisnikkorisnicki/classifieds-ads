import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AdsOverviewScreen from "../screens/ads/AdsOverviewScreen";
import HomeScreen from "../screens/HomeScreen";

import AdsNavigator from "./AdsNavigator";

import MainTabBar from "../components/UI/MainTabBar";

import { Entypo } from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  const Colors = useSelector((state) => state.ui.colors);

  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.accentDark,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        // tabBarActiveBackgroundColor: Colors.primaryDark,
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          if (route.name === "Home") {
            return (
              <Entypo
                name="home"
                size={focused ? 30 : 23}
                color={focused ? Colors.accent : Colors.accentDark}
              />
            );
          } else if (route.name === "Ads") {
            return (
              <Entypo
                name="list"
                size={focused ? 30 : 23}
                color={focused ? Colors.accent : Colors.accentDark}
              />
            );
          }
        },
        tabBarStyle: {
          borderTopColor: Colors.primary,
          backgroundColor: Colors.primary,
        },
      })}
      tabBar={(props) => <MainTabBar {...props} extraNavigation={navigation} />}
    >
      <TabNavigator.Screen
        name="Home"
        options={{ tabBarBadge: 3 }}
        component={HomeScreen}
      />

      <TabNavigator.Screen name="Ads" component={AdsNavigator} />
      <TabNavigator.Screen name="PlaceholderScreen" component={HomeScreen} />
    </TabNavigator.Navigator>
  );
};

export default BottomTabNavigator;
