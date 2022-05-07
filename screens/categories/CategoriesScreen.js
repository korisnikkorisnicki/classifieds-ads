import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

import CategoryItem from "../../components/categories/CategoryItem";

import Font from "../../constants/Font";

import CATEGORIES from "../../data/dummy-categories";

const CategoriesScreen = ({ navigation, route }) => {
  const [subCategories, setSubCategories] = useState(null);
  const Colors = useSelector((state) => state.ui.colors);

  const onPressHeaderButtonHandler = () => {
    if (subCategories) {
      setSubCategories(null);
      return;
    }
    setSubCategories(null);
    navigation.goBack();
  };

  const onPressSubCategoryButtonHandler = (name) => {
    if (!subCategories) {
      filterHandler(name);
    }
  };

  const filterHandler = (name) => {
    let selectedCategory = CATEGORIES.find((item) => item.name === name);
    setSubCategories(selectedCategory.subCategories);
  };

  const styles = stylesHandler(Colors);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
        <Button
          style={styles.headerButton}
          color={Colors.primary}
          title={subCategories ? "Categories" : "Close"}
          onPress={onPressHeaderButtonHandler}
        />
      </View>
      <View style={styles.categoriesContainer}>
        <View style={styles.categoriesList}>
          <FlatList
            data={subCategories !== null ? subCategories : CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CategoryItem
                name={item.name}
                onPress={onPressSubCategoryButtonHandler.bind(this, item.name)}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: Colors.stackBackground,
    },
    header: {
      width: "100%",
      height: "10%",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: Colors.borderColor,
    },
    headerTitle: {
      fontSize: Font.categoriesTitle,
      color: Colors.primaryText,
    },
    headerButton: {
      backgroundColor: "red",
    },
    categoriesContainer: {
      backgroundColor: Colors.primary,
    },
    categoriesList: {
      height: "100%",
      marginTop: 5,
      marginHorizontal: 10,
      backgroundColor: Colors.primaryLight,
    },
  });

export default CategoriesScreen;
