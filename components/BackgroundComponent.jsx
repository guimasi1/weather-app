import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const BackgroundComponent = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["rgba(8, 55, 70, 0.644)", "transparent"]}
      style={styles.background}
    />
  );
};

export default BackgroundComponent;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 600,
  },
});
