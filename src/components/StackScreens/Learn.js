import React from "react";
import { StyleSheet, Text, View, PixelRatio, ScrollView } from "react-native";
import { material } from "react-native-typography";
import Feel from "../Common/Feel";
import FeelTypes from "../Common/FeelTypes";

var FONT_BACK_LABEL = 15;
var FONT_HEADING = 17;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 10;
  FONT_HEADING = 25;
}

const Learn = ({ navigation }) => {
  return (
    // <SafeAreaView style={{ justifyContent:'center',alignItems:'center' ,flex:1}}>
    //   <Text style={{ fontSize:30,fontWeight:'bold' }}>Learn Screen</Text>
    //   <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
    //                     onPress={()=>navigation.navigate("Intentions")}>
    //        <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Intentions</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>

    <View style={style.container}>
      <View style={style.heading}>
        <View>
          <Text style={[material.headlineWhite, style.mainHeadingText]}>
            LEARN
          </Text>
        </View>
      </View>
      {/* <View style={style.subheading}>
        <View style={style.box}>
          <FeelTypes imageType="image1" text={"  CLASSIC\nMEDITATION"} />
        </View>
        <View style={[style.box, style.boxBorder]}>
          <FeelTypes imageType="image2" text={" SOUND\nHEALING"} />
        </View>
        <View style={[style.box, style.boxBorder]}>
          <FeelTypes imageType="image3" text={"SOMADOME\n   SESSION"} />
        </View>
        <View style={[style.box, style.boxBorder]}>
          <FeelTypes imageType="image4" text={"BREATHWORK"} />
        </View>
      </View> */}
      <ScrollView style={style.content}>
        {/* { need to use map here later } */}
        <View style={style.content__box}>
          <Text> WHAT IS MEDITATION?</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
        <View style={style.content__box}>
          <Text> WHAT IS SOUND HEALING?</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
        <View style={style.content__box}>
          <Text> WHAT IS BREATH?</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
        <View style={style.content__box}>
          <Text> THE HEALING POWER OF SOUND</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
        <View style={style.content__box}>
          <Text> THE HISTORY OF BREATHWORK</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  heading: {
    flex: 1.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6c64c3",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  // subheading: {
  //   flex: 1,
  //   flexDirection: "row",
  // },
  content: { flex: 4, flexDirection: "column", flexGrow: 4 },
  heading__content: {},
  box: {
    flex: 1,
    backgroundColor: "#6c64c3",
  },
  boxBorder: {
    borderLeftWidth: 1,
    borderLeftColor: "white",
  },
  content__box: {
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    flex: 1,
    marginLeft: 30,
    marginRight: 90,
    marginTop: 50,
    paddingBottom: 20,
  },
  content__auther_text: { color: "grey" },
  mainHeadingText: { fontSize: FONT_HEADING, fontWeight: "400" },
  subHeadingText: {
    fontSize: FONT_BACK_LABEL,
    fontWeight: "400",
    letterSpacing: 1,
  },
});

export default Learn;
