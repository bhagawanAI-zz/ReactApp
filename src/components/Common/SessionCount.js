import React from "react";
import { View, Text, StyleSheet, PixelRatio } from "react-native";

var FONT_BACK_LABEL = 25;
var FONT_HEADING = 15;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 15;
  FONT_HEADING = 13;
}

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
  heading: { color: "white", letterSpacing: 0.5, fontSize: FONT_HEADING },
  count: { color: "white", paddingTop: 20, fontSize: FONT_BACK_LABEL },
});
