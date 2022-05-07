import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import AdsOverviewScreen from "../screens/ads/AdsOverviewScreen";
import AdDetailScreen from "../screens/ads/AdDetailScreen";

const Stack = createStackNavigator();

const AdsNavigator = ({ navigation, safeAreaHandler }) => {
  const Colors = useSelector((state) => state.ui.colors);

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: Colors.stackBackground,
        },
      }}
    >
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="AdsOverviewScreen"
        component={AdsOverviewScreen}
      />
      <Stack.Screen
        // options={{ header: () => null }}
        options={{
          headerTintColor: Colors.accent,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
        name="AdDetailScreen"
        component={AdDetailScreen}
      />

      {/* <Stack.Screen name="AdDetailScreen">
        {(props) => <AdDetailScreen {...props} extraData={navigation} />}
      </Stack.Screen> */}
    </Stack.Navigator>
  );
};

export default AdsNavigator;
