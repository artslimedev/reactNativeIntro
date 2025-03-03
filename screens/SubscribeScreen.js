import * as React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import { validateEmail } from "../utils/index";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  // Add subscribe screen code here
  const isEmail = validateEmail(email);
  const handleSubscribe = () => {
    setIsSubscribed(true);
    Alert.alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        indicatorStyle="white"
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
          <Image
            source={require("../assets/little-lemon-logo-grey.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.text}>
            Subscribe to our newsletter for our delicious recipes!
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="email-address"
              placeholder="Email Address"
              onChangeText={setEmail}
              value={email}
              returnKeyType="done"
            />
            <Pressable
              onPress={handleSubscribe}
              style={isEmail ? styles.button : styles.disabledButton}
              disabled={!isEmail}
            >
              <Text style={styles.btnText}>Newsletter</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginBottom: 30,
    alignSelf: "center",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 5,
    width: "100%",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  btnText: {
    fontSize: 20,
  },
});

export default SubscribeScreen;
