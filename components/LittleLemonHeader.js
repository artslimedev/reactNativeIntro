import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const LittleLemonHeader = () => {
  return (
    <>
      <View style={headerStyles.header}>
        <Text style={headerStyles.headerText}>Da Bess</Text>
      </View>
    </>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    flex: 0.14,
    backgroundColor: "#FDD69B",
  },
  headerText: {
    marginTop: 60,
    paddingBottom: 458,
    fontSize: 30,
    color: "333333",
    textAlign: "center",
  },
});

export default LittleLemonHeader;
