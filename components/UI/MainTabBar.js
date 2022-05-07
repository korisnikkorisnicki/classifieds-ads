import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { BottomTabsNavigatorDimensions } from "../../constants/Dimensions";

const MainTabBar = ({ state, descriptors, navigation, extraNavigation }) => {
  const Colors = useSelector((state) => state.ui.colors);

  const styles = stylesHandler(Colors);

  const iconHandler = (routeName, isFocused) => {
    switch (routeName) {
      case "Home":
        return (
          <Entypo
            name="home"
            size={isFocused ? 30 : 23}
            color={isFocused ? Colors.accent : Colors.accentDark}
          />
        );
      case "Ads":
        return (
          <Entypo
            name="list"
            size={isFocused ? 30 : 23}
            color={isFocused ? Colors.accent : Colors.accentDark}
          />
        );
      case "PlaceholderScreen":
        return (
          <AntDesign
            name="menuunfold"
            size={isFocused ? 30 : 23}
            color={isFocused ? Colors.accent : Colors.accentDark}
          />
        );
    }
  };
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        if (route.name == "PlaceholderScreen") {
          return (
            <View key={index} style={[styles.mainItemContainer]}>
              <Pressable onPress={() => extraNavigation.toggleDrawer()}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  {iconHandler(route.name, isFocused)}
                  <Text style={{ color: Colors.accent }}>Menu</Text>
                </View>
              </Pressable>
            </View>
          );
        }

        // const { options } = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer]}>
            <Pressable
              onPress={onPress}
              //   style={{
              //     backgroundColor: isFocused ? "#030D16" : "#182028",
              //     borderRadius: 20,
              //   }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                {iconHandler(route.name, isFocused)}
                <Text style={{ color: Colors.accent }}>{route.name}</Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: "row",
      position: "relative",
      bottom: 0,
      backgroundColor: Colors.primary,
      borderTopColor: Colors.primary,
      borderTopWidth: 1,
      height: BottomTabsNavigatorDimensions.bottomTabsNavigatorHeight,
    },
    mainItemContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 5,
      borderRadius: 1,
      borderColor: Colors.primary,
    },
  });

export default MainTabBar;
