import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const LittleLemonHeader = () => {
  return (
    <>
      <View style={headerStyles.header}>
        <Text style={headerStyles.headerText}>Tiffany Da Bess</Text>
      </View>
    </>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    flex: 0.125,
    backgroundColor: "#FDD69B",
  },
  headerText: {
    padding: 57,
    fontSize: 30,
    color: "333333",
    textAlign: "center",
  },
});

export default LittleLemonHeader;
