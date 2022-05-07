import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ScrollView,
  View,
  Text,
  Image,
  BackHandler,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Linking,
  StatusBar,
  Dimensions,
  StyleSheet,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";

import useShortcut from "../../hooks/use-shortcut";
// import { useMainContext } from "../../context/main-context";

import Font from "../../constants/Font";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PRODUCTS from "../../data/dummy-data";

const AdDetailScreen = ({ navigation, route }) => {
  const { id, prevRoute } = route.params;
  const Colors = useSelector((state) => state.ui.colors);
  // const { onChangeShownHeaderHandler } = useMainContext();
  const currentScreen = useRoute();
  const product = PRODUCTS.find((item) => item.id === id);
  const { textToShow: titleToShow } = useShortcut({
    text: product.title,
    length: 25,
  });

  const headerHeight = useHeaderHeight();
  const windowHeight = Dimensions.get("window").height;

  const restOfView =
    windowHeight - headerHeight - 250 - StatusBar.currentHeight;

  let TouchableCross = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCross = TouchableNativeFeedback;
  }

  const styles = stylesHandler(Colors);

  useFocusEffect(
    React.useCallback(() => {
      // onChangeShownHeaderHandler();
      navigation.setOptions({ title: product.title });

      // return () => onChangeShownHeaderHandler();
    }, [currentScreen.name])
  );

  // useEffect(() => {
  //   // extraData.setOptions({
  //   //   header: () => null,
  //   // });
  // });

  function handleBackButtonClick() {
    if (prevRoute === "HomeScreen") {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Home" }],
        })
      );
    } else {
      navigation.goBack();
    }
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);

  const onPressEmailHandler = () => {
    Linking.openURL(`mailto:${"bronjaermin@gmail.com"}`);
  };

  const onPressPhoneHandler = () => {
    Linking.openURL(`tel:${"0656845788"}`);
  };

  const images = [
    "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg",
    "https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg",
    "https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg",
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} source={{ uri: product.image }} /> */}
        <SliderBox style={styles.image} images={images} />
      </View>
      <ScrollView style={[styles.adContainer, { height: restOfView }]}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{titleToShow}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>{product.price.toFixed(2)} RSD</Text>
        </View>
        <View style={styles.location}>
          <Text style={styles.locationText}>
            <Entypo name="location-pin" size={24} color={Colors.icon} />
            Novi Pazar
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{product.description}</Text>
          <View style={styles.seller}>
            <Text style={styles.sellerName}>Ermin Bronja</Text>
            <Text style={styles.sellerPhone}>+381 (0) 65 684 5788</Text>
          </View>
        </View>
        <View style={styles.contact}>
          <TouchableCross
            onPress={onPressEmailHandler}
            style={Platform.OS === "ios" ? styles.emailContact : null}
          >
            <View
              style={Platform.OS === "android" ? styles.emailContact : null}
            >
              <MaterialCommunityIcons
                name="gmail"
                size={50}
                color={Colors.inverseIcon}
              />
            </View>
          </TouchableCross>
          <TouchableCross
            onPress={onPressPhoneHandler}
            style={Platform.OS === "ios" ? styles.phoneContact : null}
          >
            <View
              style={Platform.OS === "android" ? styles.phoneContact : null}
            >
              <Entypo name="phone" size={50} color={Colors.icon} />
            </View>
          </TouchableCross>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
    imageContainer: {
      width: "100%",
      height: 250,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    adContainer: {
      paddingHorizontal: 10,
    },
    title: {
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
    },
    titleText: {
      fontFamily: Font.fontFamilyBold,
      fontSize: 22,
      color: Colors.accent,
    },
    price: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 5,
    },
    priceText: {
      fontFamily: Font.fontFamilyBold,
      fontSize: 18,
      fontStyle: "italic",
      color: Colors.accent,
    },
    location: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
    },
    locationText: {
      fontSize: 16,
      color: Colors.location,
    },
    descriptionText: {
      fontFamily: Font.fontFamily,
      fontSize: 16,
      color: Colors.simpleText,
      textAlign: "justify",
      marginBottom: 30,
    },
    sellerName: {
      fontFamily: Font.fontFamilyBold,
      fontSize: 16,
      marginBottom: 5,
      color: Colors.simpleText,
    },
    sellerPhone: {
      fontFamily: Font.fontFamilyBold,
      fontStyle: "italic",
      color: Colors.simpleText,
    },
    contact: {
      marginVertical: 20,
      flexDirection: "row",
      height: 100,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
    },
    emailContact: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.drawer,
    },
    phoneContact: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.primaryLight,
    },
  });

export default AdDetailScreen;
