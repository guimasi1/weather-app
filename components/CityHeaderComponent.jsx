import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "@/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MyFontText from "./MyFontText";
import { t, useTranslate } from "@/utils/language/translate";
import { useLanguage } from "@/contexts/LanguageContext";
import convertNumberToMonth from "@/utils/dates/convertNumberToMonth";

const CityHeaderComponent = ({ city, setCityName }) => {
  const cityName = city?.name;
  const countryName = city?.country;
  const styles = createStyle(colors);
  const t = useTranslate();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleCityNameChange = (e) => {
    setCityName(e.target.value);
  };
  const handleCityNameInputOnFocus = () => {
    setIsInputFocused(true);
  };
  const handleCityNameInputOnBlur = () => {
    setIsInputFocused(false);
  };
  const currentDate = new Date();
  console.log(currentDate.getFullYear());
  const currentMonth = convertNumberToMonth(currentDate.getMonth());
  const currentDay = currentDate.getDate();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.currentCity}>
        <MaterialIcons name="place" size={30} color={colors.white} />
        <MyFontText style={styles.headerText}>
          {cityName}, {countryName}
        </MyFontText>
      </View>
      <MyFontText style={styles.currentDay}>
        {t("today")}, {t(currentMonth)} {currentDay}
      </MyFontText>
      <View
        style={[
          styles.inputContainer,
          isInputFocused && styles.containerFocused,
        ]}
      >
        <FontAwesome
          name="search"
          size={20}
          color={colors.white}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.cityNameInput}
          onChange={(e) => {
            handleCityNameChange(e);
          }}
          onFocus={handleCityNameInputOnFocus}
          onBlur={handleCityNameInputOnBlur}
        />
      </View>
    </View>
  );
};
const createStyle = (colors) =>
  StyleSheet.create({
    headerContainer: {
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "start",
      paddingHorizontal: 20,
      gap: 30,
    },
    currentCity: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "start",
      paddingLeft: 15,
    },
    headerText: {
      fontWeight: 400,
      fontSize: 30,
      color: colors.white,
    },
    currentDay: {
      alignSelf: "start",
      fontWeight: 400,
      color: colors.white,
    },
    cityNameInput: {
      fontSize: 16,
      color: "white",
      borderWidth: 0,
      borderColor: "transparent",
      outlineStyle: "none",
    },
    searchIcon: {
      marginRight: 10,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 25,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderColor: "rgba(255, 255, 255, 0.3)",
      transition: "all 0.3s ease-in-out",
    },
    containerFocused: {
      borderColor: "white",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      shadowColor: "#fff",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
  });

export default CityHeaderComponent;
