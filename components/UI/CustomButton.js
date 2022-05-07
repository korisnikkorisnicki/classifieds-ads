import React from "react";
import { useSelector } from "react-redux";
import { View, Pressable, Text, StyleSheet } from "react-native";
import Font from "../../constants/Font";

const CustomButton = ({ title, propStyle, filled, onPress }) => {
  const Colors = useSelector((state) => state.ui.colors);

  const styles = stylesHandler(Colors);

  return (
    <Pressable
      style={[filled ? styles.buttonFilled : styles.button, propStyle]}
      onPress={onPress}
    >
      <View>
        <Text style={filled ? styles.textFilled : styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    button: {
      backgroundColor: Colors.primaryLight,
      flexDirection: "row",
      borderWidth: 0.5,
      borderColor: Colors.borderColor,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      padding: 10,
      marginBottom: 10,
      borderRadius: 6,
    },
    buttonFilled: {
      backgroundColor: Colors.primary,
      borderWidth: 0.5,
      borderColor: Colors.primary,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      padding: 10,
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: Colors.primaryText,
      fontFamily: Font.fontFamily,
      fontSize: 18,
    },
    textFilled: {
      color: "white",
      fontFamily: Font.fontFamily,
      fontSize: 18,
    },
  });

export default CustomButton;
