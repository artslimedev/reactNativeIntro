import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Text style={styles.headerText}>Welcome Tiffany</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <Pressable
        onPress={() => navigation.navigate("Welcome")}
        style={styles.button}
      >
        <Text>Login</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDD69B",
  },
  headerText: {
    paddingTop: 30,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 30,
    marginVertical: 8,
    color: "black",
    textAlign: "center",
  },
  input: {
    height: 40,
    width: 400,
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
