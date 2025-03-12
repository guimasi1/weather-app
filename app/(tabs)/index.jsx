import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CityHeaderComponent from "@/components/CityHeaderComponent";
import WeatherDetailsComponent from "@/components/WeatherDetailsComponent";
import HourlyForecastComponent from "@/components/HourlyForecastComponent";
import { createContext, useEffect, useState } from "react";
import BackgroundComponent from "@/components/BackgroundComponent";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUnits } from "@/contexts/UnitsContext";

const weatherBaseUrl = "https://api.openweathermap.org/data/2.5";

export default function Home() {
  const OPEN_WEATHER_API_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_API_KEY;
  const { language } = useLanguage();
  const { units } = useUnits();
  const styles = createStyle(colors);
  const [cityName, setCityName] = useState("Rome");
  const [debouncedCityName, setDebouncedCityName] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);

  const currentDay = new Date();
  console.log(currentDay.getDate());

  const fetchCoordinates = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${OPEN_WEATHER_API_KEY}`
      );

      if (res.ok) {
        const data = await res.json();
        const lon = data[0].lon;
        const lat = data[0].lat;
        setCoordinates({ lon, lat });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchWeather = async () => {
    if (coordinates) {
      const { lat, lon } = coordinates;
      try {
        const res = await fetch(
          `${weatherBaseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${
            units ? units : "metric"
          }&lang=${language}`
        );
        if (res.ok) {
          const data = await res.json();
          setWeatherData(data);
          console.log(data);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const fetchPollution = async () => {
    try {
      const res = await fetch(
        `${weatherBaseUrl}/air_pollution?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${OPEN_WEATHER_API_KEY}`
      );

      if (res.ok) {
        const data = await res.json();
        setPollutionData(data);
        console.log(data);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoordinates();
  }, []);

  useEffect(() => {
    if (cityName) {
      const timeout = setTimeout(() => {
        setDebouncedCityName(cityName);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [cityName]);

  useEffect(() => {
    fetchCoordinates();
  }, [debouncedCityName]);

  useEffect(() => {
    if (coordinates && coordinates.lat && coordinates.lon) {
      fetchWeather();
      fetchPollution();
    }
  }, [coordinates, units, language]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <BackgroundComponent />
        <CityHeaderComponent
          city={weatherData?.city}
          setCityName={setCityName}
        />
        <WeatherDetailsComponent
          weatherData={weatherData}
          pollutionData={pollutionData}
        />
        <HourlyForecastComponent weatherData={weatherData} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const createStyle = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.blue,
      paddingTop: 40,
    },

    //
  });
