import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import SafeArea from "../../components/UI/SafeArea";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";

const CategoriesScreen = ({ navigation }) => {
  const onPressHeaderButtonHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Categories</Text>
          <Button
            style={styles.headerButton}
            color={Colors.primary}
            title="Odustani"
            onPress={onPressHeaderButtonHandler}
          />
        </View>
        <View style={styles.categoriesContainer}></View>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  headerTitle: {
    fontSize: Font.categoriesTitle,
    color: Colors.primary,
  },
  headerButton: {
    backgroundColor: "red",
  },
  categoriesContainer: {
    width: "100%",
    height: "90%",
  },
});

export default CategoriesScreen;
