import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import MyFontText from "./MyFontText";

const WeatherDetailsComponent = () => {
  const styles = createStyle(colors);
  return (
    <View style={styles.weatherDetailsContainer}>
      <MyFontText style={styles.currentDegrees}>16°</MyFontText>
      <View style={styles.currentAndYesterdayMinMaxDegrees}>
        <View style={styles.minMaxContainer}>
          <MyFontText style={{ color: colors.white }}>Today</MyFontText>
          <View style={styles.arrowAndText}>
            <Feather name="arrow-up" size={16} color={colors.white} />
            <MyFontText style={{ color: colors.white }}>17°</MyFontText>
          </View>
          <View style={styles.arrowAndText}>
            <Feather name="arrow-down" size={16} color={colors.white} />
            <MyFontText style={{ color: colors.white }}>8°</MyFontText>
          </View>{" "}
        </View>
        <View style={styles.minMaxContainer}>
          <MyFontText style={{ color: colors.white }}>Yesterday</MyFontText>
          <View style={styles.arrowAndText}>
            <Feather name="arrow-up" size={16} color={colors.white} />
            <MyFontText style={{ color: colors.white }}>15°</MyFontText>
          </View>{" "}
          <View style={styles.arrowAndText}>
            <Feather name="arrow-down" size={16} color={colors.white} />
            <MyFontText style={{ color: colors.white }}>8°</MyFontText>
          </View>
        </View>
      </View>
    </View>
  );
};
const createStyle = (colors) =>
  StyleSheet.create({
    weatherDetailsContainer: {
      alignSelf: "start",
      paddingHorizontal: 20,
      marginBottom: 200,
    },

    currentAndYesterdayMinMaxDegrees: {
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      gap: 18,
      borderColor: colors.white,
      borderWidth: 1,
      paddingHorizontal: 18,
      paddingVertical: 10,
      borderRadius: 20,
    },

    verticalSeparator: {
      borderColor: colors.white,
      borderWidth: 1,
      borderLeftWidth: 0,
    },
    currentDegrees: {
      fontSize: 180,
      color: colors.white,
    },
    minMaxContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      flex: 1,
    },

    arrowAndText: {
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
    },
  });

export default WeatherDetailsComponent;
