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
      <DrawerContentScrollView style={styles.drawer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/drawer/drawerBackground.jpg")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/drawer/user.png")}
          />
        </ImageBackground>
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
  drawer: {
    backgroundColor: Colors.primary,
  },
  backgroundImage: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "50%",
    height: 140,
  },
});

export default MainDrawer;
