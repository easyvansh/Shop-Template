import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./app/screens/HomePage";
import ProductDetails from "./app/screens/ProductDetails";
import ShoppingCart from "./app/screens/ShoppingCart";
import { Pressable, Text } from "react-native";
import { FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./app/store/cartSlice";
import TrackOrder from "./app/screens/TrackOrder";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row", padding: 20 }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
            headerLeft: () => (
              <MaterialCommunityIcons
                onPress={() => navigation.navigate('Track Order')}
                name="truck-delivery"
                size={25}
                style={{ marginLeft: 15, fontWeight: "500" }}
                color="gray"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetails}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row", padding: 20 }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
        <Stack.Screen name="Track Order" component={TrackOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
