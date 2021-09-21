import React from "react";
import { View, SafeAreaView, StyleSheet, Text, PixelRatio } from "react-native";
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

const TRACKS = {
  mind: [],
  body: [],
  spirit: [],
};

const Use = ({ navigation }) => {
  //   const imagePath = require("../../../assets/images/creative.png");

  //   console.log("okok", navigation);
  //   let imagePath = "";
  //   if (navigation != undefined) {
  //     imagePath = require("../../../assets/images/creative.png");
  //   } else {
  //     imagePath = navigation.state.params.path;
  //   }
  //   const musicTypeNameArray = navigation.state.params.musicnames;
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
            <Feeltype imageType="mind" text={"mind"} />
            <Feeltype imageType="body" text={"SOUND\nHEALING"} />
            <Feeltype imageType="spirit" text={"SOMADOME\nSESSION"} />
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
      {/* <View style={style.time}>
                <TimeContainer />
                
            </View> */}

      <View style={style.create}>
        <Musicgrid navigation={navigation} text="clarity" imagePath="relaxed" />
      </View>
      <View style={style.create}>
        <Musicgrid navigation={navigation} text="create" imagePath="creative" />
      </View>
      <View style={style.manifest}>
        <Musicgrid
          navigation={navigation}
          text="perform"
          imagePath="recovered"
        />
      </View>

      <View style={style.love}>
        <Musicgrid
          navigation={navigation}
          text="manifest"
          imagePath="creative"
        />
      </View>
      <View style={style.love}>
        <Musicgrid
          navigation={navigation}
          text="recharge"
          imagePath="energized"
        />
      </View>
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
