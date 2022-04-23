import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Colors from "../../constants/Colors";

const MainDrawer = (props) => {
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
        <Text>Ermin Bronja</Text>
        <DrawerItemList {...props}></DrawerItemList>
      </DrawerContentScrollView>
      <View>
        <Text>Our Custom Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default MainDrawer;
