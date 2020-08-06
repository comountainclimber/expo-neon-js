import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "./window-crypto";
import Neon, { wallet, logging } from "@cityofzion/neon-js";

const walletLogger = logging.logger.getLogger("wallet");
logging.setAll("info");
walletLogger.setLevel("info");

const privateKey = Neon.create.privateKey();
const account = new wallet.Account(privateKey);
const w1 = Neon.create.wallet({ name: "myWallet" });
w1.addAccount(account);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(w1, null, 2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
