import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Favorites from "../screens/Favorites";
import CategoryMeal from "../screens/CategoryMeals";
import firebase from "../configs/firebase";

class Meal extends Component {
  state = {
    meal: null,
    mealRef: firebase.firestore().collection("Meals"),
  };

  componentDidMount() {
    const mealId = this.props.route.params.mealId;
    console.log(mealId);
    this.state.mealRef
      .doc(mealId)
      .get()
      .then((doc) => {
        this.setState({ meal: doc.data() });
      });
  }

  render() {
    if (this.state.meal == null) return null;

    return (
      <ScrollView>
        {/* Item Details */}
        <Image
          source={{ uri: this.state.meal.imageUrl }}
          style={styles.mealImage}
        />
        <Text style={styles.mealTitle}>{this.state.meal.title}</Text>

        <View style={styles.mealDetails}>
          <Text>Complexity{this.state.meal.complexity}</Text>
          <Text>Duration{this.state.meal.duration} minutes</Text>
          <Text>affordability{this.state.meal.affordability}</Text>
        </View>
        {/* Ingredient */}
        <View>
          <Text style={styles.header}>ingredients</Text>
          {this.state.meal.ingredients.map((ingredient) => (
            <View style={styles.container}>
              <Text>{ingredient} </Text>
            </View>
          ))}
        </View>
        {/* steps */}
        <View>
          <Text style={styles.header}>Steps</Text>
          {this.state.meal.steps.map((step) => (
            <View style={styles.container}>
              <Text>{step}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mealImage: {
    height: 200,
    width: "100%",
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 7,
    marginLeft: 5,
  },
  mealDetails: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderStyle: "dotted",
    margin: 7,
    borderWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  container: {
    marginVertical: 7,
    marginHorizontal: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.4)",
  },

  header: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "200",
  },
});

export default Meal;
