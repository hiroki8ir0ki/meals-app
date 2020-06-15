import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MealNavigation from "./MealNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const FooterNavigation = () => {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name="Meals"
        component={MealNavigation}
        options={{
          tabBarColor: "#4a148c",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-restaurant" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteNavigation}
        options={{
          tabBarColor: "#ff6f00",
          tabBarIcon: ({ color }) => (
            <Entypo name="star-outlined" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default FooterNavigation;
