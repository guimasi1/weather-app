import BackgroundComponent from "@/components/BackgroundComponent";
import MyFontText from "@/components/MyFontText";
import { colors } from "@/constants/colors";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { globalStyles } from "@/styles/globalStyle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUnits } from "@/contexts/UnitsContext";
import { useTranslate } from "@/utils/language/translate";

export default function Settings() {
  const styles = createStyle(colors);
  const { language, setLanguage } = useLanguage();
  const t = useTranslate();
  const { units, setUnits } = useUnits();
  return (
    <View style={globalStyles.container}>
      <BackgroundComponent />
      <MyFontText style={styles.headingTitle}>{t("settings")}</MyFontText>

      <View style={[globalStyles.flexRow, styles.settingRow]}>
        <MyFontText style={styles.settingName}>{t("language")}</MyFontText>
        <Picker
          style={styles.picker}
          selectedValue={language}
          onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
        >
          <Picker.Item label={t("english")} value="en" />
          <Picker.Item label={t("italian")} value="it" />
        </Picker>
      </View>
      <View style={globalStyles.flexRow}>
        <MyFontText style={styles.settingName}>
          {units === "metric" ? t("metric") : t("imperial")}
        </MyFontText>
        <Switch
          value={units === "metric"}
          onValueChange={() =>
            setUnits((prev) => (prev === "metric" ? "imperial" : "metric"))
          }
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={units === "metric" ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
    </View>
  );
}

const createStyle = (colors) =>
  StyleSheet.create({
    headingTitle: {
      fontSize: 30,
      marginBottom: 80,
      color: colors.white,
    },
    settingName: {
      fontSize: 20,
      color: colors.white,
    },
    picker: {
      fontSize: 20,
      marginTop: 4,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 5,
      backgroundColor: "#26418f",
      color: "white",
      borderColor: "white",
      borderWidth: 2,
    },
    settingRow: {
      marginBottom: 40,
    },
  });
