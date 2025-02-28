import * as React from "react";
import { ScrollView, Text, View, StyleSheet, TextInput } from "react-native";

const WelcomeScreen = () => {
  const [firstName, onChangeFirstName] = React.useState("");
  return (
    <ScrollView style={styles.container} indicatorStyle={"white"}>
      <Text style={styles.titleText}>Welcome Tiffany</Text>
      <Text style={styles.baseText}>
        Tiffany is actually the best person ever. She's so awesome I'm building
        this app just to say it. But now I need to add more features to showcase
        her awesomeness. I'm thinking of adding a photo gallery, a video player,
        a chat feature, and a way to send her money. I'm also thinking of adding
        a way to send her a message, a way to send her a gift, and a way to send
        her a virtual hug. I'm also thinking of adding a way to send her a
        virtual kiss, a way to send her a virtual high five, and a way to send
        her a virtual fist bump.
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFirstName}
        value={firstName}
        placeholder="First Name"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    padding: 20,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  baseText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 0,
    color: "black",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, .4)",
  },
});

export default WelcomeScreen;
