import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Linking,
  PixelRatio,
  Dimensions,
  Image,
} from "react-native";
import { material } from "react-native-typography";
import MapView, { Marker } from "react-native-maps";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var FONT_BACK_LABEL = 20;
var FONT_HEADING = 25;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 10;
  FONT_HEADING = 15;
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
        <Image style={styles.backIcon}
          source={require("../../../assets/images/back.png")} />
        <Text style={[material.display1, styles.headingText, {marginLeft : wp("17%")}]}>
          FIND A DOME
        </Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.744516,
            longitude: -73.989325,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 40.744516,
              longitude: -73.989325,
            }}
            tracksViewChanges={false}
            icon={require("../../../assets/somadome.png")}
            description={"DOME"}
          >
            <Image
              source={require("../../../assets/somadome.png")}
              style={{ height: 35, width: 50 }}
            />
          </Marker>
        </MapView>
      </View>

      <View style={styles.addressContainer}>
        <Text style={[material.headlineObject, styles.addressHeadingText]}>
          MODERN SANCTUARY
        </Text>
        <View style={[material.subheading, styles.addressText]}>
          <View style={{marginTop : 5}}>
            <Text style={styles.addressInfoText}>
              12 W 27th St 9th floor
            </Text>
            <Text style={styles.addressInfoText}>New York ,NT 1000 </Text>
            <Text style={[styles.addressInfoText, {fontFamily : "Khula-Regular"}]}>
              www.modernsanctury.com
            </Text>
            <Text style={[styles.addressInfoText,{textAlign:"center"}]}>(212) 675-9355</Text>
          </View>
        </View>
      </View>

      <View style={styles.bookingContainer}>
        <Text style={styles.addressText}>
          CALL TO BOOK YOUR SESSION
        </Text>
        <TouchableOpacity
          style={{
            height: hp("6%"),
            width: wp("60%"),
            backgroundColor: "#70b1ba",
            marginTop: hp("1.8%"),
            justifyContent : 'center',
            alignItems : 'center'
          }}
          onPress={() => Linking.openURL("https://somadome.com/")}
        >
          <Text
            style={{
              fontSize: 17,
              color: "white",
              textAlign: "center",
              fontFamily : "PTSans-Regular"
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
    backgroundColor: "white",
  },
  heading: {
    flexDirection : "row",
    height : hp("10%"),
    alignItems : "center",
    backgroundColor: "#70b1ba",
  },
  mapContainer: {
    marginTop : hp("0.4%"),
    height : hp("40%"),
  },
  addressContainer: {
    alignItems: "center",
  },
  bookingContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#f9f9f9",
    borderTopWidth: 1,
    marginTop : hp("6%")
  },
  headingText: {
    color: "white",
    fontFamily : "BebasNeueBook"
  },
  addressText: {
    color: "#b8b8bb",
    fontSize: 14,
    fontFamily : "PTSans-Regular",
    fontWeight : "700"
  },
  addressHeadingText: { 
    color: "black",
    fontSize: FONT_HEADING,
    fontFamily : "BebasNeueBook",
    fontWeight : "600"
   },
  addressInfoText: {
    textAlign:"center",
    color:"#b8b8bb",
    fontFamily : "PTSans-Regular",
    marginTop : 5
  },
  map: {
    width: "100%",
    height: "95%",
  },
  backIcon : {
    height : 30, 
    width : 17,
    marginLeft : wp("8%")
  },
  
});

export default FindDome;
