import { LanguageProvider } from "@/contexts/LanguageContext";
import { UnitsProvider } from "@/contexts/UnitsContext";
import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <UnitsProvider>
      <LanguageProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </LanguageProvider>
    </UnitsProvider>
  );
}
