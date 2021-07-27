import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function SessionCount({ text, count ,customeStyle}) {
  return (
    <View style={[style.flex1,customeStyle]}>
      <Text>{text}</Text>
      <Text> {count}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  flex1: { flex: 1, justifyContent: "center", alignItems: "center" },
});
