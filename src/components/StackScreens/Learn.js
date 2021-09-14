import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { material } from "react-native-typography";
import Feel from "../Common/Feel";
import FeelTypes from "../Common/FeelTypes";

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
          <Text style={material.headlineWhite}>LEARN</Text>
        </View>

        <View>
          <Text style={material.subheadingWhite}>
            A RESOURCE CENTER FOR MEDIATATION,
          </Text>
          <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={material.subheadingWhite}>
              BREATHWORK,AND SOUND HEALING.{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={style.subheading}>
        <View style={style.box}>
          <FeelTypes imageType="image1" text={"  CLASSIC\nMEDITATION"} />
        </View>
        <View style={style.box}>
          <FeelTypes imageType="image2" text={" SOUND\nHEALING"} />
        </View>
        <View style={style.box}>
          <FeelTypes imageType="image3" text={"SOMADOME\n   SESSION"} />
        </View>
        <View style={style.box}>
          <FeelTypes imageType="image4" text={"BREATHWORK"} />
        </View>
      </View>
      <View style={style.content}>
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
          <Text> WHAT IS MEDITATION?</Text>
          <Text style={style.content__auther_text}> BY: SOMADOME</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  heading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6c64c3",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  subheading: {
    flex: 1,
    flexDirection: "row",
  },
  content: { flex: 3, flexDirection: "column" },
  heading__content: {},
  box: {
    flex: 1,
    backgroundColor: "#6c64c3",
    borderLeftWidth: 1,
    borderLeftColor: "white",
    borderLeftColor: "white",
  },
  content__box: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    flex: 1,
    marginLeft: 30,
    marginRight: 90,
    marginTop: 30,
  },
  content__auther_text: { color: "grey" },
});

export default Learn;
