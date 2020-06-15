import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

class CategoryTile extends Component {
  render() {
    return (
      <View style={styles.CategoryTile}>
        <TouchableOpacity
          style={{ height: 100 }}
          onPress={() => this.props.changeScreen(this.props.category)}
        >
          <View
            style={{
              ...styles.categoryWrapper,
              backgroundColor: this.props.category.color,
            }}
          >
            <Text>{this.props.category.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CategoryTile: {
    flex: 1,
    margin: 13,
    height: 100,
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden",
  },
  categoryWrapper: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default CategoryTile;
