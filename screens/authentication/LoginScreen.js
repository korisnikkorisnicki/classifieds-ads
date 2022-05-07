import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  ScrollView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";

import AuthenticationHeader from "../../components/authentication/AuthenticationHeader";
import CustomInput from "../../components/authentication/CustomInput";
import CustomButton from "../../components/UI/CustomButton";

const LoginScreen = ({ navigation }) => {
  const Colors = useSelector((state) => state.ui.colors);

  const goBackHandler = () => {
    navigation.goBack();
  };

  const renderContent = () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            source={require("../../assets/login/login.png")}
            style={styles.image}
          />
        </View>
        <CustomInput placeholder="E-Mail" />
        <CustomInput placeholder="Password" />
        <CustomButton
          title="Login"
          propStyle={{ marginHorizontal: 10, marginBottom: 5 }}
          filled
        />
        <CustomButton
          title="Register"
          propStyle={{ marginHorizontal: 10 }}
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </ScrollView>
    );
  };

  const styles = stylesHandler(Colors);

  return (
    <>
      <AuthenticationHeader onPress={goBackHandler} title="Login" />
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding">
          {renderContent()}
        </KeyboardAvoidingView>
      ) : (
        renderContent()
      )}
    </>
  );
};

const stylesHandler = (Colors) =>
  StyleSheet.create({
    containerImage: {
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 20,
    },
    image: {
      width: 200,
      // height: 200,
    },
  });

export default LoginScreen;
