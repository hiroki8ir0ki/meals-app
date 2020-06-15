import React, { Component } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FooterNavigation from "./FooterNavigation";
import FilterNavigation from "./FilterNavigation";

const Drawer = createDrawerNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Meal" component={FooterNavigation} />
        <Drawer.Screen name="Filter" component={FilterNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
