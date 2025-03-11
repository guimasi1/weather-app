import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/constants/colors";
import Wave from "../assets/images/wave.svg";
import MyFontText from "./MyFontText";
const HourlyForecastComponent = () => {
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}`
      );

      if (res.ok) {
        console.log(res.json());
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.error(first);
    }
  };

  useEffect(() => {
    console.log("ciao");
  }, []);

  const styles = createStyle(colors);
  return (
    <View style={styles.hourlyForecastContainer}>
      <Wave width="100%" style={styles.wave} />
      <View style={styles.hourlyForecast}>
        <View style={styles.hourAndImageContainer}>
          <Image source="" />
        </View>
        <MyFontText>Ciao</MyFontText>
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
    hourlyForecast: {},
  });

export default HourlyForecastComponent;
