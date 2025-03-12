import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
export const globalStyles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.blue,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});
