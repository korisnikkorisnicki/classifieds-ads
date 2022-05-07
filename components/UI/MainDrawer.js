import React, { useState, useEffect } from "react";
import { View, Text, Switch, Image, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useSelector, useDispatch } from "react-redux";

import * as uiActions from "../../store/actions/ui";

const MainDrawer = (props) => {
  const darkMode = useSelector((state) => state.ui.darkMode);
  const Colors = useSelector((state) => state.ui.colors);
  const dispatch = useDispatch();

  // const toggleSwitch = () => setIsEnabled((oldVal) => !oldVal);
  const toggleSwitch = () => {
    dispatch(uiActions.changeDarkMode());
  };

  const styles = stylesHandler(Colors);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        style={styles.drawer}
        contentContainerStyle={{ backgroundColor: Colors.primary }}
      >
        {/* <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/drawer/background.jpg")}
        > */}
        <Image
          style={styles.image}
          source={require("../../assets/drawer/user.png")}
        />
        {/* </ImageBackground> */}
        <Text style={styles.nameText}>Ermin Bronja</Text>
        <DrawerItemList {...props}></DrawerItemList>
      </DrawerContentScrollView>
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={Colors.primary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={darkMode}
        />
      </View>
    </View>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    drawer: {},
    backgroundImage: {
      width: "100%",
      height: 300,
      alignItems: "center",
      padding: 20,
      justifyContent: "center",
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 40,
      margin: 10,
    },
    nameText: {
      color: Colors.simpleText,
    },
  });

export default MainDrawer;
