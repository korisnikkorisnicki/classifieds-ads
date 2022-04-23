import React from "react";
import { ScrollView, View, Image, BackHandler, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";

import { useEffect } from "react";
import PRODUCTS from "../../data/dummy-data";

const AdDetailScreen = ({ navigation, route }) => {
  const { id, prevRoute } = route.params;

  const routes = navigation.getState().routes;
  // const prevRoute = routes[routes.length - 2];

  function handleBackButtonClick() {
    if (prevRoute === "HomeScreen") {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Home" }],
        })
      );
    } else {
      navigation.goBack();
    }
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);

  const product = PRODUCTS.find((item) => item.id === id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AdDetailScreen;
