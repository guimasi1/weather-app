import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import MyFontText from "./MyFontText";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

const WeatherDetailsComponent = ({ weatherData, pollutionData }) => {
  const currentTemperature = weatherData?.list[0].main.temp;
  const weatherDescription = weatherData?.list[0].weather[0].description;
  const humidity = weatherData?.list[0].main.humidity;
  const pressure = weatherData?.list[0].main.pressure;
  const pm10 = pollutionData?.list[0].components.pm10;

  const styles = createStyle(colors);
  return (
    <View style={styles.weatherDetailsContainer}>
      <MyFontText style={styles.currentDegrees}>
        {currentTemperature?.toFixed(0)}°
      </MyFontText>
      <View style={styles.currentAndYesterdayMinMaxDegrees}>
        <View style={styles.minMaxContainer}>
          <MyFontText style={{ color: colors.white }}>
            {weatherDescription?.charAt(0).toUpperCase() +
              weatherDescription?.slice(1)}
          </MyFontText>
          <View style={styles.arrowAndText}>
            <MaterialCommunityIcons
              name="cup-water"
              size={16}
              color={colors.white}
            />
            <MyFontText style={{ color: colors.white }}>
              {humidity ? humidity : ""}
            </MyFontText>
          </View>
          <View style={styles.arrowAndText}>
            <Entypo name="gauge" size={16} color={colors.white} />
            <MyFontText style={{ color: colors.white }}>
              {pressure ? pressure : ""}
            </MyFontText>
          </View>
          <View style={styles.arrowAndText}>
            <MaterialCommunityIcons
              name="smog"
              size={16}
              color={colors.white}
            />
            <MyFontText style={{ color: colors.white }}>
              {pm10 ? pm10 : ""}
            </MyFontText>
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
      width: "100%",
    },
    currentAndYesterdayMinMaxDegrees: {
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "center",
      gap: 18,
      borderColor: colors.white,
      borderWidth: 1,
      paddingHorizontal: 25,
      paddingVertical: 16,
      borderRadius: 25,
    },

    currentDegrees: {
      fontSize: 180,
      color: colors.white,
    },
    minMaxContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      flex: 1,
    },

    arrowAndText: {
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
    },
  });

export default WeatherDetailsComponent;
