import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const LittleLemonFooter = () => {
  return (
    <View style={footerStyles.footer}>
      <Text style={footerStyles.footerText}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
};

const footerStyles = StyleSheet.create({
  footer: {
    flex: 1,
    marginBottom: 10,
  },
  footerText: {
    padding: 5,
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default LittleLemonFooter;
