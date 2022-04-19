import { createStackNavigator } from "@react-navigation/stack";

import AdsOverviewScreen from "../screens/ads/AdsOverviewScreen";
import AdDetailScreen from "../screens/ads/AdDetailScreen";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const AdsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        cardStyle: {
          backgroundColor: Colors.stackBackground,
        },
      }}
    >
      <Stack.Screen name="AdsOverviewScreen" component={AdsOverviewScreen} />
      <Stack.Screen name="AdDetailScreen" component={AdDetailScreen} />
    </Stack.Navigator>
  );
};

export default AdsNavigator;
