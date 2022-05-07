import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import useShortcut from "../../hooks/use-shortcut";

const AdItem = ({
  image,
  price,
  title,
  description,
  viewDetails,
  navigation,
}) => {
  const Colors = useSelector((state) => state.ui.colors);
  const {textToShow: descriptionToShow} = useShortcut({ text: description, length: 70 })
  const {textToShow: titleToShow} = useShortcut({ text: title, length: 30 })
  let TouchableCross = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCross = TouchableNativeFeedback;
  }

  const styles = stylesHandler(Colors);

  return (
    <View style={styles.ad}>
      <View style={styles.touchable}>
        <TouchableCross onPress={viewDetails}>
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: image,
                }}
              />
            </View>
            <View style={styles.details}>
              <Text style={styles.price}>{price} RSD</Text>
              <Text style={styles.title}>{titleToShow}</Text>
              <Text style={styles.description}>{descriptionToShow}</Text>
            </View>
          </View>
        </TouchableCross>
      </View>
    </View>
  );
};

const stylesHandler = (Colors) => {
  return StyleSheet.create({
    ad: {
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: Colors.primary,
      height: 300,
      margin: 20,
      overflow: "hidden",
    },
    touchable: {
      borderRadius: 10,
      overflow: "hidden",
    },
    imageContainer: {
      width: "100%",
      height: "60%",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    details: {
      width: "100%",
      height: "40%",
      alignItems: "center",
      padding: 10,
    },
    price: {
      fontSize: 20,
      color: Colors.accent,
      fontWeight: "bold",
    },
    title: {
      fontSize: 18,
      color: Colors.accent,
      fontWeight: "bold",
      marginBottom: 5,
    },
    description: {
      fontSize: 16,
      color: Colors.accent,
      textAlign: "center",
    },
  });
};

export default AdItem;
