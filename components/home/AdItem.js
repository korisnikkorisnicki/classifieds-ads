import React from "react";
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";

import useShortcut from "../../hooks/use-shortcut";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const AdItem = ({ uri, price, title, description, viewDetails }) => {
  const { textToShow: titleToShow } = useShortcut({ text: title, length: 20 });
  const { textToShow: descriptionToShow } = useShortcut({
    text: description,
    length: 40,
  });

  let TouchableCross = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCross = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <TouchableCross onPress={viewDetails}>
        <View style={styles.touchable}>
          <View style={styles.imageContiner}>
            <Image
              style={styles.image}
              source={{
                uri,
              }}
            />
          </View>
          <View style={styles.adContent}>
            <View style={styles.adInfo}>
              <Text style={styles.title}>{titleToShow}</Text>
              <Text style={styles.location}>Beograd</Text>
              <Text style={styles.description}>{descriptionToShow}</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{price}</Text>
            </View>
          </View>
          <View style={styles.favourite}>
            <AntDesign name="staro" size={24} color="black" />
          </View>
        </View>
      </TouchableCross>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryLight,
    marginBottom: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    width: "100%",
    padding: 10,
    height: 140,
  },
  touchable: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  imageContiner: {
    width: "35%",
  },
  image: {
    width: "100%",
    height: 120,
  },
  adContent: {
    width: "55%",
    height: "100%",
    paddingHorizontal: 10,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  adInfo: {
    flex: 1,
  },
  title: {
    color: Colors.primary,
    fontSize: 16,
  },
  location: {
    marginTop: 2,
    color: Colors.location,
  },
  description: {
    color: Colors.primary,
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    color: Colors.accent,
    fontSize: 16,
  },
  favourite: {
    width: "10%",
    height: "100%",
    justifyContent: "space-between",
  },
});

export default AdItem;
