import React, { useEffect } from "react";
import { Button, FlatList } from "react-native";

import AdItem from "../../components/ads/AdItem";

import PRODUCTS from "../../data/dummy-data";

const AdsOverviewScreen = ({ navigation }) => {
  // const onPressHandler = () => {
  //   navigation.
  // };

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTintColor: "red",
  //   });
  // }, []);

  return (
    <>
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
    </>
  );
};

export default AdsOverviewScreen;
