import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CityHeaderComponent from "@/components/CityHeaderComponent";
import WeatherDetailsComponent from "@/components/WeatherDetailsComponent";
import HourlyForecastComponent from "@/components/HourlyForecastComponent";

export default function Home() {
  const styles = createStyle(colors);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CityHeaderComponent />
        <WeatherDetailsComponent />
        <HourlyForecastComponent />
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
