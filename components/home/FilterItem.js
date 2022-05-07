import React from "react";
import { useSelector } from "react-redux";
import { Dimensions, View, StyleSheet } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const FilterItem = (props) => {
  const Colors = useSelector((state) => state.ui.colors);

  const styles = stylesHandler(Colors);

  return (
    <Pressable style={styles.item} onPress={props.onPress}>
      {props.children}
    </Pressable>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    item: {
      padding: 15,
      borderRadius:
        Math.round(
          Dimensions.get("window").width + Dimensions.get("window").height
        ) / 2,
      backgroundColor: Colors.accent,
      marginHorizontal: 5,
    },
  });

export default FilterItem;
