import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
} from "react-native";

var FONT_BACK_LABEL = 20;
var FONT_HEADING = 15;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 15;
  FONT_HEADING = 10;
}

export default function Clarity({ navigation }) {
  const title = navigation.state.params.title || "CLRITY";
  return (
    <View style={style.container}>
      <View style={[style.heading, style.center]}>
        <Text style={style.text}>{title}</Text>
      </View>
      <View style={[style.para1, style.center]}>
        <View style={style.circle}>
          <Image
            source={require("../../../assets/images/somadomewhite.png")}
          ></Image>
          <View>
            <Text style={style.durationText}>20 MINS</Text>
          </View>
        </View>
      </View>
      <View style={[style.para2, style.center]}>
        <View style={{ flexDirection: "row", color: "blue" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SeassionStart")}
          >
            <Image source={require("../../../assets/images/play.png")}></Image>
          </TouchableOpacity>

          <Text
            style={{
              color: "#77bec7",
              marginTop: 20,
              marginLeft: 10,
              fontSize: 24,
            }}
          >
            BEGIN SESSION{" "}
          </Text>
        </View>
      </View>
      <View style={[style.para3, style.paragraph]}>
        <Text style={[style.paratext]}>
          This guided meditation uses Theta and spoken meditation to encourage
          you to look into your heart to discover the purest, deepest intentions
          for your life. Theta waves erase thoughts of lack or limitation.
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  heading: {
    flex: 0.5,
    color: "grey",
  },
  para1: {
    flex: 1,
  },
  para2: {
    flex: 0.5,
  },
  para3: {
    flex: 1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
    backgroundColor: "#e2e6e7",
    justifyContent: "center",
    alignItems: "center",
  },
  durationText: {
    marginTop: 10,
    letterSpacing: 2,
  },
  text: {
    fontSize: 30,
    color: "grey",
  },
  paragraph: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  paratext: {
    fontSize: FONT_BACK_LABEL,
    color: "grey",
    lineHeight: 30,
  },
});
