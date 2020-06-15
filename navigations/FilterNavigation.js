import React from "react";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Filters from "../screens/Filters";

const Stack = createStackNavigator();

function FilterNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Filter"
        component={Filters}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 15 }}
              onPress={() => props.navigation.toggleDrawer()}
            >
              <Entypo name="menu" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default FilterNavigation;
