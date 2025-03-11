import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/colors";

import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MyFontText from "./MyFontText";
const CityHeaderComponent = () => {
  const styles = createStyle(colors);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.currentCity}>
        <MaterialIcons name="place" size={30} color={colors.white} />
        <MyFontText style={styles.headerText}>London, UK</MyFontText>
      </View>
      <MyFontText style={styles.currentDay}>Today, Oct 18</MyFontText>
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
  });

export default CityHeaderComponent;
