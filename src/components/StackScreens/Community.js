import React from "react";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { material } from "react-native-typography";

const Community = ({ navigation }) => {
  return (
    // <SafeAreaView
    //   style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    // >
    //   <Text style={{ fontSize: 30, fontWeight: "bold" }}>Community Screen</Text>

    //   <TouchableOpacity
    //     style={{
    //       height: 50,
    //       width: 150,
    //       backgroundColor: "black",
    //       marginTop: "10%",
    //     }}
    //     onPress={() => navigation.navigate("Intentions")}
    //   >
    //     <Text
    //       style={{
    //         fontSize: 18,
    //         color: "white",
    //         textAlign: "center",
    //         paddingTop: 12,
    //       }}
    //     >
    //       Go to Intentions
    //     </Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity
    //     style={{
    //       height: 50,
    //       width: 150,
    //       backgroundColor: "black",
    //       marginTop: "10%",
    //     }}
    //     onPress={() => navigation.navigate("Home")}
    //   >
    //     <Text
    //       style={{
    //         fontSize: 18,
    //         color: "white",
    //         textAlign: "center",
    //         paddingTop: 12,
    //       }}
    //     >
    //       Go to Home
    //     </Text>
    //   </TouchableOpacity>
    // </SafeAreaView>
    <SafeAreaView style={style.contianer}>
      <View style={style.heading}>
        <Text style={material.headlineWhite}>COMMUNITY</Text>
      </View>
      <View style={style.ActivitySection}>
        <Text style={[material.body2, { marginTop: 20 }]}>ACTIVITY</Text>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
          <View style={{ flex: 0.3 }}>
            <Image
              style={style.image}
              source={require("../../../assets/images/community/tashaFrame.png")}
            ></Image>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              borderBottomColor: "grey",
              borderBottomWidth: 1,
            }}
          >
            <Text>
              Tasha in Houston, TX just completed the, "Deep Relaxation" sound
              healing and says, "Magical. I can't imagine a better way to start
              my day. I felt like I was floating."
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 0.3 }}>
            <Image
              style={style.image}
              source={require("../../../assets/images/community/sarahFrame.png")}
            ></Image>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              borderBottomColor: "grey",
              borderBottomWidth: 1,
            }}
          >
            <Text>
              Joan in New York, NY just completed the, "Increase Energy"
              breathwork session.
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 0.3 }}>
            <Image
              style={style.image}
              source={require("../../../assets/images/community/markFrame.png")}
            ></Image>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              borderBottomColor: "grey",
              borderBottomWidth: 1,
            }}
          >
            <Text>
              Mark in Los Angeles, CA just completed the, "Attract Intentions
              meditation and says, "I swear this works! Been doing this every
              day this week."
            </Text>
          </View>
        </View>
      </View>
      <View style={style.TopRatedSecion}>
        <Text style={[material.subheading, { marginTop: 20 }]}>
          TOP RATED SEASSIONS THIS WEEK
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={style.flex1}>
              <ImageBackground
                style={style.imageRound}
                source={require("../../../assets/images/community/Layer1.png")}
              >
                <Text style={material.captionWhite}>{"175 \nPlays"}</Text>
              </ImageBackground>
            </View>
            <View style={style.flex1}>
              <View style={{ alignItems: "center" }}>
                <Text style={material.display1}>2.</Text>
              </View>
              <Text>`DEEP RELAXATION SOUND HEALING`</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={style.flex1}>
              <ImageBackground
                style={style.imageRound}
                source={require("../../../assets/images/community/perform-1.png")}
              >
                <Text style={material.captionWhite}>{"250 \nPlays"}</Text>
              </ImageBackground>
            </View>
            <View style={style.flex1}>
              <View style={{ alignItems: "center" }}>
                <Text style={material.display1}>1.</Text>
              </View>
              <Text>`INCREASE ENERGY BREATHWORK`</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={[style.flex1, { flexDirection: "column" }]}>
              <ImageBackground
                style={style.imageRound}
                source={require("../../../assets/images/community/perform.png")}
              >
                <Text style={material.captionWhite}>{"123 \nPlays"}</Text>
              </ImageBackground>
            </View>
            <View style={style.flex1}>
              <View style={{ alignItems: "center" }}>
                <Text style={material.display1}>3.</Text>
              </View>
              <Text>ATTRACT INTENTIONS MEDIATATION</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  contianer: { flex: 1 },
  heading: {
    flex: 0.5,
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
    width: 90,
    height: 90,
    resizeMode: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Community;
