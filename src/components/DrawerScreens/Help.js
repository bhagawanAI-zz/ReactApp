import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CommonHeadingText from "../Common/CommonHeadingText";

// const textContent = [{}];

const Help = () => {
  return (
    <SafeAreaView style={style.container}>
      <CommonHeadingText
        headingText="NEED HELP ?"
        SubheadingText="CONTACT US "
      />
      <CommonHeadingText headingText="CALL:" SubheadingText="[888]462-7655" />
      <CommonHeadingText
        headingText="EMAIL:"
        SubheadingText="SUPPORT@SOMEDOME.COM"
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },})

export default Help;
