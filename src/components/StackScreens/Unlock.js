import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { material } from "react-native-typography";

export default function Unlock() {
  return (
    <View style={style.container}>
      <View style={style.heading}>
        <Text style={[material.headlineWhite, style.text]}>UNLOCK MODE</Text>
        <Text style={[material.captionWhite, style.text]}>
          {" "}
          SET YOUR COLOR CLOSE THE APP LISTEN TO ANYTHING
        </Text>
      </View>
      <View style={style.SlideContainer}>
        <Image
          source={require("../../../assets/images/unlock/slide.png")}
        ></Image>
      </View>
      <View style={style.BottomContainer}>
        <Image
          source={require("../../../assets/images/unlock/play.png")}
        ></Image>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  heading: {
    flex: 0.5,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  SlideContainer: { flex: 3, justifyContent: "center", alignItems: "center" },
  BottomContainer: { flex: 2, justifyContent: "center", alignItems: "center" },
  text: {
    letterSpacing: 1,
  },
});
