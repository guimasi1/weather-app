import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { colors } from "../../constants/colors";
import { t, useTranslate } from "@/utils/language/translate";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TabLayout() {
  const blue = colors.blue;
  const { language } = useLanguage();
  const t = useTranslate();
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: blue, headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t("settings"),
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
