import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "../configs/firebase";

//screens
import Meal from "../screens/Meal";
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import Favorites from "../screens/Favorites";

const Stack = createStackNavigator();

class MealNavigation extends React.Component {
  state = {
    favoriteRef: firebase.firestore().collection("favorites"),
    favorites: [],
  };

  componentDidMount() {
    this.state.favoriteRef.doc("favorites").onSnapshot((doc) => {
      this.setState({ favorites: doc.data().favorites });
    });
    // .get()
    // .then((doc) => {
    //   console.log(doc.data());
    //   this.setState({ favorites: doc.data().favorites });
    // });
  }

  isFavorite = (mealId) => {
    return this.state.favorites.filter((favorite) => favorite === mealId);
  };

  addFavorite = (mealId) => {
    // add favorite logic
    this.state.favoriteRef.doc("favorites").update({
      favorites: firebase.firestore.FieldValue.arrayUnion(mealId),
    });
  };

  removeFavorite = (mealId) => {
    // remove
    this.state.favoriteRef.doc("favorites").update({
      favorites: firebase.firestore.FieldValue.arrayRemove(mealId),
    });
  };

  render() {
    const props = this.props;

    return (
      <Stack.Navigator initialRootName="Categories">
        <Stack.Screen
          options={{
            title: "Meal Categories",
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 15 }}
                onPress={() => props.navigation.toggleDrawer()}
              >
                <Entypo name="menu" size={30} color="black" />
              </TouchableOpacity>
            ),
          }}
          name="Categories"
          component={Categories}
        />
        <Stack.Screen name="Category Meals" component={CategoryMeals} />
        <Stack.Screen
          name="Meal"
          component={Meal}
          options={{
            headerRight: ({ navigation }) => {
              const index = props.route.state.index;
              const mealId = props.route.state.routes[index].params.mealId;
              const isFavorite = this.isFavorite(mealId).length > 0;
              return (
                <TouchableOpacity
                  style={{ paddingRight: 15 }}
                  onPress={() =>
                    isFavorite === true
                      ? this.removeFavorite(mealId)
                      : this.addFavorite(mealId)
                  }
                >
                  <Ionicons
                    name={isFavorite === true ? "ios-star" : "ios-star-outline"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              );
            },
          }}
          name="Meal"
          component={Meal}
        />
      </Stack.Navigator>
    );
  }
}

export default MealNavigation;
