import React from "react";
import { useSelector } from "react-redux";
import { View, FlatList, StyleSheet } from "react-native";

import AdItem from "../../components/ads/AdItem";

import PRODUCTS from "../../data/dummy-data";

const AdsOverviewScreen = ({ navigation }) => {
  const Colors = useSelector((state) => state.ui.colors);

  // const onPressHandler = () => {
  //   navigation.
  // };

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTintColor: "red",
  //   });
  // }, []);

  const styles = stylesHandler(Colors);

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <AdItem
            image={itemData.item.image}
            price={itemData.item.price}
            title={itemData.item.title}
            description={itemData.item.description}
            viewDetails={() =>
              navigation.navigate("AdDetailScreen", {
                id: itemData.item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors.stackBackground,
    },
  });

export default AdsOverviewScreen;
