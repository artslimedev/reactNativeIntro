import * as React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      indicatorStyle={"white"}
    >
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "white",
          textAlign: "center",
        }}
      >
        Welcome Tiffany
      </Text>
      <Text
        style={{
          fontSize: 38,
          padding: 20,
          marginVertical: 8,
          color: "white",
          textAlign: "center",
        }}
      >
        Tiffany is actually the best person ever. She's so awesome I'm building
        this app just to say it. But now I need to add more features to showcase
        her awesomeness. I'm thinking of adding a photo gallery, a video player,
        a chat feature, and a way to send her money. I'm also thinking of adding
        a way to send her a message, a way to send her a gift, and a way to send
        her a virtual hug. I'm also thinking of adding a way to send her a
        virtual kiss, a way to send her a virtual high five, and a way to send
        her a virtual fist bump.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    padding: 40,
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  baseText: {
    fontSize: 38,
    padding: 20,
    marginVertical: 8,
    color: "white",
    textAlign: "center",
  },
});

export default WelcomeScreen;
