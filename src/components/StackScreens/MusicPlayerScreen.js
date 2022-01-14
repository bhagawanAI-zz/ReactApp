import React, { useState,useEffect } from "react";
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/AntDesign"
import Slider from "react-native-slider";
import TrackPlayer , { State } from "react-native-track-player";

const MusicPlayerScreen = (props) => {
    console.log("In music player", props)
    const {navigation} = props;
    const {title} = navigation?.state?.params;
    const [value, setValue] = useState(0.1);
    const [songState,setSongState] = useState('paused');

    useEffect(() => {
        TrackPlayer.setupPlayer();
    },[])

    const track = {
        url : require("../../../assets/testing.mp3"),
        title : "Test Title",
        artist : "Test Artist",
        artwork : require("../../../assets/somadome.png"),
        duration : 58
    }

    const handlePlayClick = async () => {
        await TrackPlayer.add([track]);
        const state = await TrackPlayer.getState();
        // if(state === State.Playing){
        //     console.log("The Player is playing")
        // }
        if(songState==="paused"){
            TrackPlayer.play();
            setSongState("playing")
        }else if(songState==="playing"){
            TrackPlayer.pause();
            setSongState("paused")
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/wave.jpg")}
                resizeMode="cover"
                style={{ height: hp("100%") , width : wp("100%")}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backIcon}
                        source={require("../../../assets/images/back.png")} />
                </TouchableOpacity>
                <Text style={styles.musicText}>{title ? title :"CLARITY"}</Text>
                <View style={styles.slider}>
                    <Slider
                        value={value}
                        onValueChange={(value) => setValue(value)} />
                </View>
                <View style={styles.buttonContainer}>
                    <Icon name="banckward" size={20} color="white" />
                    <TouchableOpacity style={styles.musicIconContainer}
                     onPress={handlePlayClick}>
                        {songState==="paused" && <Icon name="caretright" size={28} color="white" />}
                        {songState==="playing" && <Icon name="pause" size={28} color="white" />}
                    </TouchableOpacity>
                    <Icon name="forward" size={20} color="white" />
                </View>
            </ImageBackground>
        </View>
    )
}

export default MusicPlayerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIcon: {
        height: 30,
        width: 17,
        marginLeft: wp("8%"),
        marginTop : hp("2%")
    },
    musicText : {
        fontFamily : "Khula-Regular",
        fontSize : 25,
        fontWeight : "bold",
        color : "white",
        textAlign : 'center',
        marginTop : hp("60%")
    },
    slider : {
        marginTop : hp("5%")
    },
    buttonContainer : {
        display : "flex",
        flexDirection : "row",
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : hp("2%")
    },
    musicIconContainer : {
        display : 'flex',
        alignItems : "center",
        justifyContent : 'center',
        height : 60,
        width : 60,
        borderRadius : 30,
        backgroundColor : '#3890e8',
        marginLeft : wp("10%"),
        marginRight : wp("10%")
    }
})

