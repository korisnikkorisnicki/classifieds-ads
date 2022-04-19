import React from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";

import PRODUCTS from "../../data/dummy-data";

const AdDetailScreen = ({ route }) => {
  const { id } = route.params;

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
