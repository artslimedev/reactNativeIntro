import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <MenuItems /> */}
        <WelcomeScreen />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDD69B",
  },
  footerContainer: {
    flex: 0.05,
    backgroundColor: "#FDD69B",
  },
});
