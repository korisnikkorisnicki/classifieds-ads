// import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App() {
  return (
    <>
      {/* <SafeAreaProvider> */}
      <StatusBar barStyle="light-content" style="light" />
      <DrawerNavigator />
      {/* </SafeAreaProvider> */}
    </>
  );
}
