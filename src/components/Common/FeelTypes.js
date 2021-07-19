import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function FeelTypes({ imageType, text }) {
  const images = {
    image1: require("../../../assets/images/types/BREATHWORK.png"),
    image2: require("../../../assets/images/types/sound.png"),
    image3: require("../../../assets/images/types/somadome.png"),
    image4: require("../../../assets/images/types/MEDITATION.png"),
  };

  return (
    <View style={style.container}>
      <Image style={style.image} source={images[imageType]}></Image>
      <View style={style.textContainer}>
        <Text style={style.text}>{text}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    paddingTop: 15,
  },
  text: {
    color: "grey",
    fontSize: 10,
  },
});
