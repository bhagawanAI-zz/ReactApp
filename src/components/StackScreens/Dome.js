import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Linking,
  PixelRatio,
} from "react-native";
import { material } from "react-native-typography";
import MapView from "react-native-maps";

var FONT_BACK_LABEL = 20;
var FONT_HEADING = 25;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 15;
  FONT_HEADING = 20;
}

const FindDome = ({ navigation }) => {
  return (
    // <SafeAreaView style={{ justifyContent:'center',alignItems:'center' ,flex:1}}>
    //   <Text style={{ fontSize:30,fontWeight:'bold' }}>Find Dome Screen</Text>
    //   <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
    //                     onPress={()=>navigation.navigate("Intentions")}>
    //        <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Intentions</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>

    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={[material.display1, styles.headingText]}>
          FIND A DOME{" "}
        </Text>
      </View>

      <View style={styles.mapContainer}>
        {/* <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
      </View>

      <View style={styles.addressContainer}>
        <Text style={[material.headline, styles.addressHeadingText]}>
          MODRN SANCTUARY{" "}
        </Text>
        <Text style={[material.subheading, styles.addressText]}>
          {/* {
            "12 W 27th St 9th floor,\n New York ,NT 1000 \n www.modernsanctury.com \n(212) 675-9355"
          } */}
          <Text style={styles.addressInfoText}>
            12 W 27th St 9th floor,{"\n"}{" "}
          </Text>
          <Text style={styles.addressInfoText}>New York ,NT 1000 {"\n"}</Text>
          <Text style={styles.addressInfoText}>
            www.modernsanctury.com {"\n"}
          </Text>
          <Text style={styles.addressInfoText}>(212) 675-9355 {"\n"}</Text>
        </Text>
      </View>

      <View style={styles.bookingContainer}>
        <Text style={[material.subheading, styles.addressText]}>
          CALL TO BOOK YOUR SESSION{" "}
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 180,
            backgroundColor: "rgb(37, 150, 190)",
            marginTop: "10%",
          }}
          onPress={() => Linking.openURL("https://somadome.com/")}
        >
          <Text
            style={{
              fontSize: FONT_BACK_LABEL,
              color: "white",
              textAlign: "center",
              paddingTop: 12,
            }}
          >
            BOOK A SESSION
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  heading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(37, 150, 190)",
  },
  mapContainer: {
    flex: 1.5,
  },
  addressContainer: {
    flex: 1,
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  bookingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "grey",
    borderTopWidth: 1,
  },
  headingText: {
    color: "white",
    fontSize: FONT_HEADING,
  },
  addressText: {
    color: "grey",
    fontSize: FONT_BACK_LABEL,
  },
  addressHeadingText: { color: "grey", fontSize: FONT_HEADING },
  addressInfoText: {
    marginLeft: 30,
    marginRight: 30,
  },
});

export default FindDome;
