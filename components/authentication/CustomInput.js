import React from "react";
import { useSelector } from "react-redux";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Font from "../../constants/Font";

const CustomInput = ({ label, placeholder, keyboardType }) => {
  const Colors = useSelector((state) => state.ui.colors);

  const styles = stylesHandler(Colors);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={Colors.placeholderColor}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 10,
      marginBottom: 10,
    },
    label: {
      fontSize: 16,
      marginHorizontal: 5,
      color: Colors.primaryText,
    },
    containerInput: {
      height: 50,
      backgroundColor: Colors.primaryLight,
      borderWidth: 0.5,
      borderColor: Colors.borderColor,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      backgroundColor: Colors.stackBackground,
      padding: 10,
      borderRadius: 6,
      backgroundColor: Colors.primaryLight,
      flex: 1,
      justifyContent: "center",
    },
    textInput: {
      fontFamily: Font.fontFamily,
      fontSize: 16,
      color: Colors.simpleText,
    },
  });

export default CustomInput;
