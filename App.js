import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "./window-crypto";
import Neon from "@cityofzion/neon-js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Neon.create.privateKey()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
