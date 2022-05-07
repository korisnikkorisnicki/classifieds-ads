import React from "react";
import { useSelector } from "react-redux";
import Constants from "expo-constants";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const SafeAreaTwo = (props) => {
  const Colors = useSelector((state) => state.ui.colors);

  const styles = stylesHandler(Colors);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" style="light" />
      <View style={styles.another}>{props.children}</View>
    </SafeAreaView>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    screen: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: Colors.primary,
    },
    another: {
      height: "100%",
    },
  });

export default SafeAreaTwo;
