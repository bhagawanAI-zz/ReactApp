import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Feeltype({ imageType, text, navigation }) {
  console.log("this is navigation", navigation);
  const images = {
    mind: require("../../../assets/images/use/mind.png"),
    body: require("../../../assets/images/use/body.png"),
    spirit: require("../../../assets/images/use/sprit.png"),
    lock: require("../../../assets/images/use/lock.png"),
  };

  if (imageType == "lock") {
    return (
      <TouchableOpacity
        style={style.container}
        onPress={() => navigation.navigate("Unlock")}
      >
        <Image style={style.image} source={images[imageType]}></Image>
      </TouchableOpacity>
    );
  }

  return (
    <View style={style.container}>
      <Image style={style.image} source={images[imageType]}></Image>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  textContainer: {
    flex: 1,
    paddingTop: 15,
  },
  text: {
    color: "grey",
    fontSize: 15,
  },
});
