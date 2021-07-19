import React from "react";
import { StyleSheet, Text, View } from "react-native";
const CommonHeadingText = ({ headingText, SubheadingText }) => {
    return (
      <View style={style.content__box}>
        <Text style={style.contain_heading_text}> {headingText}</Text>
        <Text  style={style.content__auther_text}> {SubheadingText} </Text>
      </View>
    );
  };
  const style = StyleSheet.create({
    container: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 200,
    },
    content__box: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    contain_heading_text: { fontSize: 20 },
    content__auther_text: { color: "grey", fontSize: 20 },
  });
  

  export default CommonHeadingText