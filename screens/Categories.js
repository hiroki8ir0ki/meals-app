import React, { Component } from "react";
import { View, Text, Button, CategoryTitle } from "react-native";
import firebase from "../configs/firebase";
import { FlatList } from "react-native-gesture-handler";
import CategoryTile from "./components/CategoryTile";

class Categories extends Component {
  state = {
    categoriesRef: firebase.firestore().collection("Categories"),
    categories: [],
  };

  componentDidMount() {
    this.state.categoriesRef.get().then((snapshot) => {
      const categories = snapshot.docs.map((doc) => {
        return doc.data();
      });
      this.setState({ categories: categories });
    });
  }
  navigateScreen = (category) => {
    console.log(category);
    this.props.navigation.navigate("Category Meals", { catId: category.id });
  };

  render() {
    return (
      <FlatList
        data={this.state.categories}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryTile category={item} changeScreen={this.navigateScreen} />
        )}
      />
    );
  }
}

export default Categories;
