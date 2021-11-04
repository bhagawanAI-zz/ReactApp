import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  PixelRatio,
  Dimensions,
} from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { material } from "react-native-typography";
import { GetFontSize } from "../../Utills/commonUtills";
var FONT_BACK_LABEL = 10;
var FONT_HEADING = 15;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 8;
  FONT_HEADING = 9;
}

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Userdata = [
  {
    image: require("../../../assets/images/community/tashaFrame.png"),
    review: `Tasha in Houston, TX just completed the, "Deep Relaxation" sound healing and says, "Magical. I can't imagine a better way to start my day. I felt like I was floating."`,
  },
  {
    image: require("../../../assets/images/community/sarahFrame.png"),
    review: `Joan in New York, NY just completed the, "Increase Energy" breathwork session.`,
  },
  {
    image: require("../../../assets/images/community/markFrame.png"),
    review: `Mark in Los Angeles, CA just completed the, "Attract Intentions" meditation and says, “I swear this works! Been doing this every day this week."`,
  },
];

const Community = ({ navigation }) => {
  return (
    <View style={style.contianer}>
      <View style={style.heading}>
        <Text style={[material.headlineWhite, style.headingText]}>
          COMMUNITY
        </Text>
      </View>
      <View style={style.ActivitySection}>
        <Text style={[material.body2, { marginTop: 20 }, style.text]}>
          ACTIVITY
        </Text>
        {Userdata.map((item, index) => {
          let isBorder = true;
          if (index === Userdata.length - 1) {
            isBorder = false;
          }
          return (
            <Activity
              key={index}
              text={item.review}
              imageType={item.image}
              isBorder={isBorder}
            />
          );
        })}
      </View>
      <View style={style.TopRatedSecion}>
        <Text
          style={[
            material.subheading,
            { marginTop: 20, marginBottom: 3 },
            style.text,
          ]}
        >
          TOP RATED SESSIONS THIS WEEK
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={style.flex1}>
              <ImageBackground
                style={style.imageRound}
                source={require("../../../assets/images/community/Layer1.png")}
              >
                <Text style={[material.captionWhite, style.Playtext]}>
                  {"175"}
                </Text>
                <Text style={[material.captionWhite, style.Playtext]}>
                  {"PLAYS"}
                </Text>
              </ImageBackground>
            </View>
            <View style={[style.flex1, { marginTop: "13%" }]}>
              <View style={{ alignItems: "center" }}>
                <Text style={[material.display1, { color: "grey" }]}>2.</Text>
              </View>
              <Text style={style.activitytext}>
                `DEEP RELAXATION SOUND HEALING`
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={style.flex1}>
              <ImageBackground
                style={style.imageRoundBig}
                source={require("../../../assets/images/community/perform-1.png")}
              >
                <Text style={[material.captionWhite, style.Playtext]}>
                  {"250"}
                </Text>
                <Text style={[material.captionWhite, style.Playtext]}>
                  {"PLAYS"}
                </Text>
              </ImageBackground>
            </View>
            <View style={[style.flex1, { marginBottom: "5%" }]}>
              <View style={{ alignItems: "center" }}>
                <Text style={[material.display1, { color: "grey" }]}>1.</Text>
              </View>
              <Text style={style.activitytext}>
                `INCREASE ENERGY BREATHWORK`
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={[style.flex1, { flexDirection: "column" }]}>
              <ImageBackground
                style={style.imageRound}
                source={require("../../../assets/images/community/perform.png")}
              >
                <Text style={[material.captionWhite, style.Playtext]}>
                  {"123"}
                </Text>
                <Text style={[material.captionWhite, style.Playtext]}>
                  {"PLAYS"}
                </Text>
              </ImageBackground>
            </View>
            <View style={[style.flex1, { marginTop: "13%" }]}>
              <View style={{ alignItems: "center" }}>
                <Text style={[material.display1, { color: "grey" }]}>3.</Text>
              </View>
              <Text style={style.activitytext}>
                ATTRACT INTENTIONS MEDIATATION
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

function Activity({ text, imageType, isBorder }) {
  let borderWidth = 1;
  if (!isBorder) {
    borderWidth = 0;
  }

  return (
    <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
      <View style={{ flex: 0.3 }}>
        <Image style={style.image} source={imageType}></Image>
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: 20,
          borderBottomColor: "grey",
          borderBottomWidth: borderWidth,
        }}
      >
        <Text style={style.activitytext}>{text}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  contianer: { flex: 1 },
  heading: {
    flex: 0.4,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  ActivitySection: {
    flex: 1.2,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 30,
  },
  TopRatedSecion: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 30,
  },
  flex1: { flex: 1 },
  image: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
  imageRound: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_WIDTH * 0.2,
    borderRadius: (SCREEN_HEIGHT * 0.15) / 2,
    overflow: "hidden",
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  imageRoundBig: {
    width: SCREEN_WIDTH * 0.25,
    height: SCREEN_WIDTH * 0.25,
    borderRadius: (SCREEN_HEIGHT * 0.25) / 2,
    overflow: "hidden",
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    letterSpacing: 2,
    fontSize: FONT_HEADING,
  },
  activitytext: {
    fontSize: FONT_BACK_LABEL,
    color: "grey",
  },
  Playtext: {
    fontSize: FONT_HEADING,
    letterSpacing: 2,
    fontWeight: "bold",
  },
  headingText: {
    fontSize: GetFontSize(),
  },
});
export default Community;
