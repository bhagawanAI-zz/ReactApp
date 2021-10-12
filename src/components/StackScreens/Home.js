import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const Home = ({ navigation }) => {
  let isPaired = false;
  let screen = "Use"; // change screen if not paired
  if (isPaired) {
    screen = "Use";
  }
  const imagePath = require("../../../assets/images/creative.png");

  return (
    <View style={styles.center}>
      <View style={styles.heading}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
          CHOOSE YOUR DOME
        </Text>
      </View>
      <View style={styles.mainContent}>
        <TouchableOpacity
          style={[styles.roundButton,styles.roundTop]}
          onPress={() => navigation.navigate(screen, { path: imagePath })}
        >
          {/* <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>DOMING AT HOME</Text> */}
          <View style={styles.circle}>
            <Image
              style={styles.images}
              source={require("../../../assets/images/home/HOME.png")}
            ></Image>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.durationText}>MY</Text>
              <Text style={styles.durationText}>DOME</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roundButton,styles.roundBottom]}
          onPress={() => navigation.navigate(screen, { path: imagePath })}
        >
          <View style={styles.circle}>
            <Image
              style={styles.images}
              source={require("../../../assets/images/home/DOME.png")}
            ></Image>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.durationText}>MARKET</Text>
              <Text style={styles.durationText}>DOME</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  roundButton: {
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  images: {
    width: 70,
    height: 70,
  },
  center: {
    flex: 1,
  },
  mainContent: {
    flex: 3,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    letterSpacing: 3,
  },
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.45,
    height: Dimensions.get("window").width * 0.45,
    backgroundColor: "#87d5e1",
    justifyContent: "center",
    alignItems: "center",
  },
  durationText: {
    marginTop: 1,
    fontWeight: "bold",
    color: "white",
  },

  roundTop: {paddingTop:"10%"},
  roundBottom: {paddingBottom:"10%"},
});

export default Home;
