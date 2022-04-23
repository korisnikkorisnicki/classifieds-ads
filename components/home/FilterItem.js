import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Colors from "../../constants/Colors";

const FilterItem = (props) => {
  return <Pressable style={styles.item}>{props.children}</Pressable>;
};

const styles = StyleSheet.create({
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
