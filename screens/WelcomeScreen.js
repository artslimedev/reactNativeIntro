import * as React from "react";
import { View, Image, Text, Button, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.text}>
            Little Lemon, your local Mediterranean Bistro
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.navigate("Subscribe")}
          style={styles.button}
        >
          <Text style={styles.btnText}>Newsletter</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 70,
  },
  titleWrapper: {
    width: "70%",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 70,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
  },
});

export default WelcomeScreen;
