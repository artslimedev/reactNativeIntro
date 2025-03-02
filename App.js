import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuScreen from "./components/MenuScreen";
import LoginScreen from "./components/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const LogoTitle = () => {
  return (
    <>
      <Image
        style={{
          width: 30,
          height: 30,
          resizeMode: "contain",
          alignSelf: "center",
        }}
        source={require("./img/logo.png")}
      />
      <Text style={{ fontSize: 20, color: "black" }}> Tiffany Da Besss</Text>
    </>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#FDD69B",
              borderBottomColor: "black",
              borderBottomWidth: 3,
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            },
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              title: "Tiffany",
              headerTitle: (props) => <LogoTitle />,
            }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
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
