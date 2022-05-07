import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import AuthenticationHeader from "../../components/authentication/AuthenticationHeader";
import CustomInput from "../../components/authentication/CustomInput";
import CustomButton from "../../components/UI/CustomButton";

import { MaterialIcons } from "@expo/vector-icons";
import Font from "../../constants/Font";

const RegisterScreen = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState("Gender");
  const [gender, setGender] = useState(true);
  const [date, setDate] = useState(new Date());
  const [isChangedDate, setIsChangedDate] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const Colors = useSelector((state) => state.ui.colors);

  const goBackHandler = () => {
    navigation.goBack();
  };

  const onGenderValueChangeHandler = (value) => {
    if (gender) {
      setGender(false);
    }
    setSelectedGender(value);
  };

  const onChangeDateHandler = (event, selectedDate) => {
    if (event.type === "set") {
      if (!(selectedDate instanceof Date)) {
        setShowCalendar(false);
        return;
      }
      setShowCalendar(false);
      setIsChangedDate(true);
      setDate(selectedDate);
    } else {
      setShowCalendar(false);
      setIsChangedDate(false);
      setDate(new Date());
    }
  };

  const renderContent = () => {
    return (
      <ScrollView>
        <View style={styles.twoInputsInRow}>
          <CustomInput label="First Name" placeholder="First Name" />
          <CustomInput label="Last Name" placeholder="Last Name" />
        </View>
        <CustomInput
          label="E-Mail"
          placeholder="E-Mail"
          keyboardType="email-address"
        />
        <CustomInput label="Password" placeholder="Password" />
        <View style={styles.twoInputsInRow}>
          <CustomInput label="City" placeholder="City" />
          <CustomInput label="Country" placeholder="Country" />
        </View>
        <CustomInput label="Address" placeholder="Address" />
        <CustomInput
          label="Phone Number"
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <View style={styles.twoInputsInRow}>
          <View style={styles.pickerWithLabelContainer}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={[
                  styles.picker,
                  {
                    color: gender ? Colors.placeholderColor : Colors.simpleText,
                  },
                ]}
                onValueChange={(value) => onGenderValueChangeHandler(value)}
                selectedValue={selectedGender}
              >
                {gender && (
                  <Picker.Item
                    label="Gender"
                    value="gender"
                    enabled={false}
                    style={{ color: Colors.placeholderColor }}
                  />
                )}
                <Picker.Item
                  label="Male"
                  value="Male"
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label="Female"
                  value="Female"
                  style={styles.pickerItem}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.dateTimePickerContainer}>
            <Text style={styles.label}>Date Of Birth</Text>
            <Pressable
              style={styles.button}
              onPress={() => setShowCalendar(true)}
            >
              <MaterialIcons name="date-range" size={24} color="white" />
              <Text style={styles.buttonText}>
                {isChangedDate
                  ? date.getDate() +
                    " / " +
                    (+date.getMonth() + 1) +
                    " / " +
                    date.getFullYear()
                  : "Pick Date"}
              </Text>
            </Pressable>
          </View>
        </View>
        <CustomButton
          title="Register"
          filled
          propStyle={{ marginHorizontal: 10 }}
        />
        {showCalendar && (
          <DateTimePicker
            value={date}
            onChange={onChangeDateHandler}
            maximumDate={
              new Date(date.getFullYear() - 18, date.getMonth(), date.getDay())
            }
          />
        )}
      </ScrollView>
    );
  };

  const styles = stylesHandler(Colors);

  return (
    <>
      <AuthenticationHeader
        onPress={goBackHandler}
        title="Register"
        propStyle={{ marginBottom: 10 }}
      />
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
    twoInputsInRow: {
      flexDirection: "row",
    },
    pickerWithLabelContainer: {
      marginHorizontal: 10,
      marginBottom: 10,
      flex: 1,
    },
    label: {
      fontSize: 16,
      marginHorizontal: 5,
      color: Colors.primaryText,
    },
    pickerContainer: {
      backgroundColor: Colors.primaryLight,
      borderWidth: 0.5,
      borderColor: Colors.borderColor,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      backgroundColor: Colors.stackBackground,
      borderRadius: 6,
      backgroundColor: Colors.primaryLight,
      height: 50,
      paddingTop: 0,
      justifyContent: "center",
    },
    picker: {
      color: Colors.simpleText,
    },
    pickerItem: {
      fontSize: 18,
    },
    dateTimePickerContainer: {
      flex: 1,
      marginHorizontal: 10,
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: Colors.primary,
      height: 50,
      paddingHorizontal: 10,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 6,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontFamily: Font.fontFamily,
    },
  });

export default RegisterScreen;
