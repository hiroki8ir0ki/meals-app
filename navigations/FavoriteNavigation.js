import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Meal from "../screens/Meal";
import Favorites from "../screens/Favorites";

const Stack = createStackNavigator();

class FavoriteNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="favorites" component={Favorites} />
        <Stack.Screen name="Meal" component={Meal} />
      </Stack.Navigator>
    );
  }
}

export default FavoriteNavigation;
