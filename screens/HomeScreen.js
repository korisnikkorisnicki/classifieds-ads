import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  BackHandler,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import FilterItem from "../components/home/FilterItem";

import Colors from "../constants/Colors";
import AdItem from "../components/home/AdItem";
import PRODUCTS from "../data/dummy-data";

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
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
          onChangeText={(value) => setSearchText(value)}
        />
        <Pressable style={styles.searchIcon}>
          <AntDesign name="filter" size={24} color="black" />
        </Pressable>
      </View>

      <ScrollView>
        <View style={[styles.filtersBorder, { borderTopWidth: 1 }]}></View>
        <View style={styles.filtersContainer}>
          <View
            style={[styles.fixedFilter, styles.filtersItem]}
            horizontal={true}
          >
            <FilterItem onPress={() => navigation.navigate('Categories')}>
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
            <Text style={styles.homeInfoText}>Latest</Text>
          </View>
          <View>
            <Text style={styles.homeInfoText}>Yesterday 15, in total 50</Text>
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
                navigation.navigate("AdsNavigator", {
                  screen: "AdDetailScreen",
                  params: { id: product.id, prevRoute: "HomeScreen" },
                });
              }}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    marginVertical: 10,
    marginHorizontal: 20,
    height: 55,
    backgroundColor: Colors.primaryLight,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: Colors.primary,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  searchInput: {
    color: "black",
    flex: 1,
    borderRightWidth: 1,
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
    paddingLeft: 10,
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
});

export default HomeScreen;
