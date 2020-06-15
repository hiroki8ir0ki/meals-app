import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

import RootNavigation from "./navigations/RootNavigation";
import { encode, decode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  return <RootNavigation />;
}

