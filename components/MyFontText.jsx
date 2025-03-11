import { Text, StyleSheet } from "react-native";
import { Lexend_500Medium, useFonts } from "@expo-google-fonts/lexend";

export default function MyFontText({ children, style }) {
  const [fontsLoaded, fontError] = useFonts({
    Lexend_500Medium,
  });

  if (!fontsLoaded && !fontError) return null;

  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Lexend_500Medium",
  },
});
