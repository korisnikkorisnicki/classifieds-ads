import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AdsOverviewScreen from "../screens/ads/AdsOverviewScreen";
import AdDetailScreen from "../screens/ads/AdDetailScreen";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const AdsNavigator = ({ navigation }) => {
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
        options={{ header: () => null }}
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
