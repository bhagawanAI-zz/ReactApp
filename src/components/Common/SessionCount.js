import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function SessionCount({ text, count, customeStyle }) {
  return (
    <View style={[style.flex1, customeStyle]}>
      <Text style={style.heading}>{text}</Text>
      <Text style={style.count}> {count}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  flex1: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading:{color:"white",letterSpacing:0.5},
  count:{color:"white",paddingTop:20,fontSize:25}
});
