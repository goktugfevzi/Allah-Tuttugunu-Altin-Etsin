import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home/Home";
import Credit from "./pages/Credit/Credit";
import React from "react";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

const HomeHeaderTitle = () => (
  <View style={{ alignItems: "center" }}>
    <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
      Tuttuğun Altın Olsun
    </Text>
  </View>
);

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: HomeHeaderTitle,
          }}
        />
        <Stack.Screen
          name="Credit"
          component={Credit}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}