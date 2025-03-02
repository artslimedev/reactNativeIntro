import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuScreen from "./components/MenuScreen";
import LoginScreen from "./components/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Text style={{ fontSize: 20, color: "black" }}> Lemon</Text>
    </>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Welcome") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Menu") {
              iconName = focused ? "menu" : "menu-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#FDD69B",
          },
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
      {/* <View style={styles.container}>
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
              title: "Welcome",
              headerTitle: (props) => <LogoTitle />,
            }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
      </View> */}
      {/* <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDD69B",
  },
  footerContainer: {
    flex: 0.02,
    backgroundColor: "#FDD69B",
  },
});
