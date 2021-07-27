import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Avatar } from "react-native-paper";
import { material } from "react-native-typography";
import SessionCount from "../../Common/SessionCount";

const Profile = ({ navigation }) => {
  return (
    // <SafeAreaView style={{ justifyContent:'center',alignItems:'center' }}>
    //   <Text style={{ fontSize:30,fontWeight:'bold' }}>Profile Screen</Text>
    //   <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
    //                     onPress={()=>navigation.navigate("EditProfile")}>
    //        <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Edit Profile</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>
    <SafeAreaView style={style.container}>
      <View style={style.profile}>
        <View
          style={{
            justifyContent: "center",
            // alignItems: 'center',
            marginTop: 7,
            marginBottom: 12,
            flexDirection: "row",
          }}
        >
          <Avatar.Image
            source={require("../../../../assets/images/userProfileEdit/AVATARICON.png")}
            size={80}
            style={{ backgroundColor: "white" }}
          />
        </View>
        <View>
          <Text style={material.headline}>Nick Freshno</Text>
        </View>
        <View>
          <Text style={material.subheading}>Live, laugh, love.</Text>
        </View>
      </View>
      <View style={style.sessionsContent}>
        <View style={style.sessionStartContainer}>
          <SessionCount
            text="SESSIONS THIS MONTH"
            count="4"
            customeStyle={{ backgroundColor: "#717aa1", flex: 1 }}
          />
          <SessionCount
            text="TOTAL SESSIONS"
            count="123"
            customeStyle={{ flex: 1, backgroundColor: "#5869b7" }}
          />
        </View>
        <View style={style.sessionStartContainer}>
          <SessionCount
            text="CONSICUTIVE DAYS"
            count="3"
            customeStyle={{ flex: 1, backgroundColor: "#49ab9d" }}
          />
          <SessionCount
            text="CONSICUTIVE DAYS"
            count="18"
            customeStyle={{ flex: 1, backgroundColor: "#80ddd3" }}
          />
        </View>
      </View>
      <View style={style.sessionsHistoryContent}>
        <Text style={material.display1}>SESSION HISTORY</Text>
      </View>
      <View style={style.bottom}>
        <Text>YOU COMPLETED MANIFEST ON MARCH 30 </Text>
        <Text>YOU COMPLETED FOCUS ON MARCH 30 </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  profile: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  sessionsContent: { flex: 1 },
  sessionsHistoryContent: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: { flex: 0.5, justifyContent: "center", alignItems: "center" },
  sessionStartContainer: {
    flex: 1,
    flexDirection: "row",
  },
  flex1: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Profile;
