import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Pressable, StyleSheet } from "react-native";

import Font from "../../constants/Font";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const AuthenticationHeader = ({ onPress, title, propStyle }) => {
  const Colors = useSelector((state) => state.ui.colors);

  const styles = stylesHandler(Colors);

  return (
    <View style={[styles.header, propStyle]}>
      <Pressable onPress={onPress} style={styles.headerBackButton}>
        {title.toLowerCase() === "login" ? (
          <AntDesign name="left" size={28} color="white" />
        ) : (
          <Entypo name="home" size={28} color="white" />
        )}
      </Pressable>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
      </View>
      <View style={styles.emptyView} />
    </View>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    header: {
      backgroundColor: Colors.primary,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    headerBackButton: {
      flex: 1,
    },
    titleContainer: {
      alignItems: "center",
      justifyContent: "center",
      flex: 2,
    },
    title: {
      fontFamily: Font.fontFamilyBold,
      fontSize: 18,
      color: "white",
      textAlign: "center",
    },
    emptyView: {
      flex: 1,
    },
  });

export default AuthenticationHeader;
