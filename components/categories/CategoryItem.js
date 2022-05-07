import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";
import Font from "../../constants/Font";

import { AntDesign } from "@expo/vector-icons";

const CategoryItem = ({ name, onPress }) => {
  const Colors = useSelector((state) => state.ui.colors);

  let TouchableCross = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCross = TouchableNativeFeedback;
  }

  const styles = stylesHandler(Colors);

  return (
    <View style={styles.categoryItem}>
      <TouchableCross onPress={onPress}>
        <View style={styles.categoryItemContent}>
          <Text style={styles.text}>{name}</Text>
          <AntDesign name="caretright" size={16} color={Colors.primaryIcon} />
        </View>
      </TouchableCross>
    </View>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    categoryItem: {
      height: 60,
      paddingHorizontal: 10,
    },
    categoryItemContent: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: 2,
      borderBottomColor: Colors.borderColor,
      height: "100%",
      paddingHorizontal: 5,
    },
    text: {
      fontFamily: Font.fontFamily,
      fontSize: 16,
      color: Colors.primaryText,
    },
  });

export default CategoryItem;
