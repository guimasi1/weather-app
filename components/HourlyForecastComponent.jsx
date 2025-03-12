import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "@/constants/colors";
import Wave from "../assets/images/wave.svg";
import MyFontText from "./MyFontText";

const HourlyForecastComponent = ({ weatherData }) => {
  const list = weatherData?.list.slice(1, 5);
  const extractTime = (text) => {
    let time = text.split(" ")[1];
    return time.slice(0, -3);
  };
  const styles = createStyle(colors);
  return (
    <View style={styles.hourlyForecastContainer}>
      <Wave width="100%" style={styles.wave} />
      <View style={styles.iconsAndDegreesContainer}>
        <MyFontText style={styles.titleForecast}>Hourly Forecast</MyFontText>
        <View style={styles.flexRow}>
          {list &&
            list.map((el, i) => (
              <View key={i} style={styles.iconAndTimeAndDegree}>
                <Image
                  source={{
                    uri: `https://openweathermap.org/img/wn/${el.weather[0]?.icon}@2x.png`,
                  }}
                  style={styles.icons}
                />
                <MyFontText style={styles.time}>
                  {extractTime(el.dt_txt)}
                </MyFontText>
                <MyFontText style={styles.degrees}>
                  {el.main?.temp?.toFixed(0)}°
                </MyFontText>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

const createStyle = (colors) =>
  StyleSheet.create({
    hourlyForecastContainer: {
      alignSelf: "start",
    },
    wave: {
      position: "fixed",
      bottom: 0,
      right: 0,
    },
    iconsAndDegreesContainer: {
      paddingHorizontal: 40,
      position: "fixed",
      bottom: 100,
    },
    titleForecast: {
      fontSize: 20,
      marginBottom: 20,
    },
    icons: {
      width: 50,
      height: 50,
    },
    time: {
      color: "gray",
    },
    iconAndTimeAndDegree: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
    },
    degrees: { fontSize: 24, textAlign: "center", marginLeft: 7 },
    flexRow: {
      flexDirection: "row",
      gap: 45,
    },
  });

export default HourlyForecastComponent;
