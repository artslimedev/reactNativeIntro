import * as React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Image,
  useColorScheme,
  Pressable,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [message, onChangeMessage] = React.useState("");
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme !== "light";
  return (
    <KeyboardAvoidingView
      style={isDarkMode ? styles.darkContainer : styles.container}
      behavior="padding"
    >
      <ScrollView
        indicatorStyle={"white"}
        keyboardDismissMode="none"
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.headerWrapper}>
          <Image
            source={require("../img/logo.png")}
            resizeMode="contain"
            style={styles.logo}
            accessible={true}
            accessibilityLabel="Little Lemon Logo"
          />
          <Text style={styles.titleText}>Welcome</Text>
        </View>
        {/* <Pressable
          onPress={() => navigation.navigate("Menu")}
          style={styles.button}
        >
          <Text>View Menu</Text>
        </Pressable> */}
        <Text style={styles.baseText}>
          I need to add more features to make it look like I'm not just building
          this app for no reason. So here's a form for to fill out for practice.
          I need to add more things to this app as i finish the course. I'm
          going to add a login screen and a menu screen.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.messageInput}
          onChangeText={onChangeMessage}
          value={message}
          placeholder="Message"
          multiline={true}
          numberOfLines={4}
          maxLength={200}
        />
        <Pressable onPress={() => setLogin(true)} style={styles.button}>
          <Text>Submit</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDD69B",
    justifyContent: "center",
    alignContent: "center",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.2)",
    justifyContent: "center",
    alignContent: "center",
  },
  titleText: {
    padding: 20,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 20,
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
    width: "90%",
    margin: 12,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, .4)",
  },
  messageInput: {
    height: 100,
    width: "90%",
    margin: 12,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, .4)",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 12,
    width: 200,
    margin: 12,
    borderRadius: 10,
    elevation: 3,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "rgba(255, 255, 255, .4)",
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#333333",
  },
});

export default WelcomeScreen;
