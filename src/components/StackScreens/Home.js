import React from "react";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { color } from "react-native-reanimated";

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
          style={styles.roundButton}
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
          style={styles.roundButton}
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  roundButton: {
    marginTop: "4%",
    width: "30%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
  },
  images: {
    width: 70,
    height: 70,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  mainContent: {
    flex: 3,
    justifyContent: "center",
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
});

export default Home;
