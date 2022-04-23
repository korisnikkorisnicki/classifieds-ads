import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import Colors from "../../constants/Colors";

const SafeArea = (props) => {
  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: Colors.primary, color: "white", flex: 0 }}
      />
      <StatusBar barStyle="light-content" style="light" />

      <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
      {props.children}
    </>
  );
};

export default SafeArea;
