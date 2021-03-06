import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import FilterItem from "../components/home/FilterItem";

import AdItem from "../components/home/AdItem";
import { BottomTabsNavigatorDimensions } from "../constants/Dimensions";
import PRODUCTS from "../data/dummy-data";

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const Colors = useSelector((state) => state.ui.colors);
  const darkMode = useSelector((state) => state.ui.darkMode);

  const styles = stylesHandler(Colors);

  return (
    <View style={styles.container}>
      {/* <Button
        title="RADI"
        onPress={() =>
          navigation.navigate("AdsNavigator", {
            screen: "AdDetailScreen",
            params: { id: 'p2' },
          })
        }
      /> */}

      <View style={styles.search}>
        <Pressable disabled={searchText === ""}>
          <Ionicons
            name="search-outline"
            size={22}
            color="black"
            style={[
              styles.searchIcon,
              { color: searchText !== "" ? Colors.primary : Colors.disabled },
            ]}
          />
        </Pressable>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={Colors.placeholderColor}
          onChangeText={(value) => setSearchText(value)}
        />
        <Pressable style={styles.searchIcon}>
          <AntDesign name="filter" size={24} color={Colors.icon} />
        </Pressable>
      </View>

      <ScrollView>
        <View style={[styles.filtersBorder, { borderTopWidth: 1 }]}></View>
        <View style={styles.filtersContainer}>
          <View
            style={[styles.fixedFilter, styles.filtersItem]}
            horizontal={true}
          >
            <FilterItem onPress={() => navigation.navigate("Categories")}>
              <FontAwesome
                name="folder-open"
                size={34}
                color={Colors.primaryLight}
              />
            </FilterItem>
            <Text style={styles.filtersItemText}>Categories</Text>
          </View>
          <ScrollView style={styles.shiftingFilters} horizontal>
            <View style={styles.filtersItem}>
              <FilterItem>
                <MaterialCommunityIcons
                  name="account-tie"
                  size={34}
                  color={Colors.primaryLight}
                />
              </FilterItem>
              <Text style={styles.filtersItemText}>Work</Text>
            </View>
            <View style={styles.filtersItem}>
              <FilterItem>
                <AntDesign name="car" size={34} color={Colors.primaryLight} />
              </FilterItem>
              <Text style={styles.filtersItemText}>Car</Text>
            </View>
            <View style={styles.filtersItem}>
              <FilterItem>
                <FontAwesome
                  name="soccer-ball-o"
                  size={34}
                  color={Colors.primaryLight}
                />
              </FilterItem>
              <Text style={styles.filtersItemText}>Sport</Text>
            </View>
            <View style={styles.filtersItem}>
              <FilterItem>
                <MaterialIcons
                  name="pedal-bike"
                  size={34}
                  color={Colors.primaryLight}
                />
              </FilterItem>
              <Text style={styles.filtersItemText}>Bike</Text>
            </View>
            <View style={styles.filtersItem}>
              <FilterItem>
                <Feather
                  name="smartphone"
                  size={34}
                  color={Colors.primaryLight}
                />
              </FilterItem>
              <Text style={styles.filtersItemText}>Phone</Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={[
            styles.filtersBorder,
            {
              borderBottomWidth: 1,
            },
          ]}
        ></View>

        <View style={styles.homeInfo}>
          <View>
            <Text
              style={
                darkMode === false ? styles.homeInfoText : styles.simpleText
              }
            >
              Latest
            </Text>
          </View>
          <View>
            <Text
              style={
                darkMode === false ? styles.homeInfoText : styles.simpleText
              }
            >
              Yesterday 15, in total 50
            </Text>
          </View>
        </View>

        <ScrollView style={styles.homeAd}>
          {PRODUCTS.map((product) => (
            <AdItem
              key={product.id}
              id={product.id}
              uri={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              viewDetails={() => {
                navigation.navigate("Ads", {
                  screen: "AdDetailScreen",
                  params: { id: product.id, prevRoute: "HomeScreen" },
                });
              }}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors.stackBackground,
    },
    search: {
      marginVertical: 10,
      marginHorizontal: 20,
      height: 55,
      backgroundColor: Colors.primaryLight,
      flexDirection: "row",
      borderWidth: 0.5,
      borderColor: Colors.borderColor,
      alignItems: "center",
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      backgroundColor: Colors.stackBackground,
    },
    searchInput: {
      color: Colors.simpleText,
      flex: 1,
      borderRightWidth: 1,
      borderColor: Colors.borderColor,
      fontSize: 18,
    },
    searchIcon: {
      paddingHorizontal: 15,
    },
    filtersBorder: {
      borderColor: Colors.accent,
      marginHorizontal: 10,
    },
    filtersContainer: {
      flexDirection: "row",
      paddingVertical: 10,
      alignItems: "center",
      backgroundColor: Colors.primaryLight,
    },
    fixedFilter: {
      borderRightWidth: 2,
      borderColor: Colors.accent,
      paddingHorizontal: 5,
    },
    filtersItem: {
      alignItems: "center",
    },
    filtersItemText: {
      color: Colors.accent,
    },
    shiftingFilters: {
      flex: 1,
      paddingVertical: 10,
    },
    homeInfo: {
      // height: 70,
      backgroundColor: Colors.stackBackground,
      margin: 10,
      alignItems: "center",
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 15,
      padding: 5,
      backgroundColor: Colors.primaryLight,
    },
    homeInfoText: {
      color: Colors.primary,
    },
    simpleText: {
      color: Colors.simpleText,
    },
    homeAd: {
      paddingBottom: BottomTabsNavigatorDimensions.paddingBottomOfFirstAdjacent,
    },
  });

export default HomeScreen;
