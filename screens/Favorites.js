import React, { Component } from "react";
import { View, Text, StatusBar, FlatList } from "react-native";
import firebase from "../configs/firebase";

import MealItem from "./components/MealItem";
class Favorites extends Component {
  state = {
    favoriteRef: firebase.firestore().collection("favorites"),
    mealRef: firebase.firestore().collection("Meals"),
    favoriteMeals: [],
  };

  componentDidMount() {
    this.state.favoriteRef.doc("favorites").onSnapshot((doc) => {
      const favorites = doc.data().favorites;

      this.state.mealRef
        .where("id", "in", favorites)
        .get()
        .then((snapshot) => {
          const meals = snapshot.docs.map((doc) => doc.data());

          console.log(meals);
          this.setState({ favoriteMeals: meals });
        });
    });
  }

  navigateScreen = (meal) => {
    this.props.navigation.navigate("Meal", { mealId: meal.id });
  };

  render() {
    return (
      <View>
        <StatusBar />
        <FlatList
          data={this.state.favoriteMeals}
          renderItem={({ item }) => (
            <MealItem meal={item} changeScreen={this.navigateScreen} />
          )}
        />
      </View>
    );
  }
}

export default Favorites;
