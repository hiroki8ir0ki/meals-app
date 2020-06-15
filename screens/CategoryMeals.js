import React, { Component } from "react";
import { View, FlatList } from "react-native";
import firebase from "../configs/firebase";
import MealItem from "./components/MealItem";

class CategoryMeals extends Component {
  state = {
    meals: [],
    mealsRef: firebase.firestore().collection("Meals"),
  };
  componentDidMount() {
    const catId = this.props.route.params.catId;
    console.log(catId);
    this.state.mealsRef
      .where("categoryIds", "array-contains", catId)
      .get()
      .then((snapshot) => {
        const meals = snapshot.docs.map((doc) => doc.data());
        console.log(meals);
        this.setState({ meals: meals });
      });
  }

  navigateScreen = (meal) => {
    // change screens to Meal.js
    this.props.navigation.navigate("Meal", { mealId: meal.id });
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.meals}
          renderItem={({ item }) => (
            <MealItem meal={item} changeScreen={this.navigateScreen} />
          )}
        />
      </View>
    );
  }
}

export default CategoryMeals;
