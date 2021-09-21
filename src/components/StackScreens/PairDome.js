import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { material } from "react-native-typography";

export default function PairDome({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.heading}>
        <Text style={material.display1}>PAIR YOUR DOME</Text>
      </View>
      <View style={style.para1}>
        <Text style={[material.body2, style.margin]}>
          It appears this is your first seassion in this dome, so let's pair
          your phone.
        </Text>
      </View>
      <View style={style.para2}>
        <Text style={[material.body2, style.margin]}>
          Please stand near the dome, select your dome, and click "connect".
        </Text>
      </View>
      <View style={style.para3}>
        <Text style={material.display1}>Select Dome:</Text>
        <Text style={material.button}>MODRN SANCTUARY </Text>
      </View>
      <View style={style.para3}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            backgroundColor: "rgb(37, 150, 190)",
            marginTop: "10%",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              textAlign: "center",
              paddingTop: 12,
            }}
          >
            CONNECT
          </Text>
        </TouchableOpacity>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  para1: {
    flex: 1,
  },
  para2: {
    flex: 0.5,
  },
  para3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  para4: {},
  margin: {
    marginLeft: 30,
    marginRight: 30,
  },
});
