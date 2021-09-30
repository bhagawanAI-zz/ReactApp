import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  PixelRatio,
  ScrollView,
} from "react-native";
import Feeltype from "../Common/Feeltype";
import FeelTypes from "../Common/FeelTypes";
import Musicgrid from "../Common/Musicgrid";
// import TimeContainer from "../Common/TimeContainer";

import { material } from "react-native-typography";

var FONT_BACK_LABEL = 12;
var FONT_HEADING = 15;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 10;
  FONT_HEADING = 10;
}

const feelTypes = [
  { imageType: "mind", text: "mind" },
  { imageType: "body", text: "SOUND\nHEALING" },
  { imageType: "spirit", text: "SOMADOME\nSESSION" },
  // { imageType: "lock", text: "BREATHWORK" },
];

const MindGrids = [
  { text: "clarity", imagePath: "relaxed" },
  { text: "create", imagePath: "creative" },
  { text: "focus", imagePath: "focused" },
  { text: "succeed", imagePath: "focused" },
  { text: "relaxed", imagePath: "relaxed" },
  { text: "motivate", imagePath: "focused" },
  { text: "perform", imagePath: "recovered" },
  { text: "confidence", imagePath: "focused" },
];

const BodyGrids = [
  { text: "perform", imagePath: "recovered" },
  { text: "recharge", imagePath: "relaxed" },
  { text: "relax", imagePath: "relaxed" },
  { text: "snooze", imagePath: "relaxed" },
  { text: "heal", imagePath: "recovered" },
  { text: "overcome", imagePath: "recovered" },
  { text: "fit", imagePath: "recovered" },
  { text: "confidence", imagePath: "focused" },
];

const SpiritGrids = [
  { text: "ascend", imagePath: "creative" },
  { text: "aspire", imagePath: "focused" },
  { text: "bliss", imagePath: "creative" },
  { text: "manifest", imagePath: "creative" },
  { text: "love", imagePath: "creative" },
  { text: "reclaim", imagePath: "creative" },
  { text: "prosper", imagePath: "recovered" },
  { text: "overcome", imagePath: "recovered" },
];

const TRACKS = {
  mind: MindGrids,
  body: BodyGrids,
  spirit: SpiritGrids,
};

const Use = ({ navigation }) => {
  const [iconName, seticonName] = useState("mind");
  const [grid, setGrid] = useState("mind");
  return (
    <View style={style.container}>
      <View style={style.heading}>
        <Text style={[material.headlineWhite, style.text]}>USE</Text>
      </View>
      <View style={style.typeContainer}>
        <View style={style.TypeLeft}>
          <View style={style.TypeLeft__Text}>
            <Text style={style.TypeText}>WHAT NEEDS YOUR ATTENTION ? </Text>
          </View>
          <View style={style.TypeLeft__icons}>
            {feelTypes.map((item, index) => {
              return (
                <Feeltype
                  key={index}
                  imageType={item.imageType}
                  text={item.text}
                  seticonName={seticonName}
                  setGrid={setGrid}
                />
              );
            })}
          </View>
        </View>
        <View style={style.TypeRight}>
          <Feeltype
            imageType="lock"
            text={"BREATHWORK"}
            navigation={navigation}
          />
        </View>
      </View>
      <ScrollView style={{ flex: 4, flexGrow: 4 }}>
        {TRACKS[grid].map((item, index) => {
          return (
            <View style={style.create}>
              <Musicgrid
                key={index}
                navigation={navigation}
                text={item.text}
                imagePath={item.imagePath}
                iconName={iconName}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  typeContainer: {
    flex: 1.2,
    backgroundColor: "white",
    flexDirection: "row",
    // alignItems:"center",
    justifyContent: "space-around",
  },
  TypeRight: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7%",
  },
  TypeLeft: {
    flex: 4,
    flexDirection: "column",
    borderRightWidth: 1,
    borderRightColor: "grey",
  },
  TypeLeft__icons: {
    flex: 3,
    flexDirection: "row",
  },
  TypeLeft__Text: { flex: 1, justifyContent: "center", alignItems: "center" },
  TypeText: { color: "grey", letterSpacing: 1, fontSize: FONT_BACK_LABEL },
  time: {
    flex: 1,
    backgroundColor: "white",
  },
  create: {
    flex: 1,
    backgroundColor: "white",
  },
  manifest: {
    flex: 1,
    backgroundColor: "grey",
  },
  love: {
    flex: 1,
    backgroundColor: "pink",
  },
  textContainer: {},
  heading: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Use;
