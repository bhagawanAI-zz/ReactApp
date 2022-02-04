import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/AntDesign"
import Slider from "react-native-slider";
import TrackPlayer, {
    getTrack,
    getCurrentTrack,
    addEventListener,
    TrackPlayerEvents,
    useTrackPlayerEvents,
    STATE_PLAYING,
    STATE_PAUSED,
} from "react-native-track-player";

const { PLAYBACK_STATE } = TrackPlayerEvents;

const MusicPlayerScreen = (props) => {
    const { navigation } = props;
    const { title, musicName } = navigation?.state?.params;

    const [isReady, setReady] = useState(false);
    const [value, setValue] = useState(0.1);
    const [isplaying, setPlaying] = useState(false)

    const [track, setTrack] = useState({
        id: "1",
        title: "undefined",
        artist: "undefined",
        url: "",
        duration: "05:30",
        artwork: require("../../../assets/somadome.png")
    })

    useTrackPlayerEvents([PLAYBACK_STATE], (event) => {
        if (event.type === PLAYBACK_STATE) {
            if (event.state === STATE_PLAYING) {
                setPlaying(true)
            } else if (event.state === STATE_PAUSED) {
                setPlaying(false)
            }
        }
    })

    useEffect(() => {
        TrackPlayer.setupPlayer().then(() => {
            TrackPlayer.updateOptions({
                stopWithApp: true,

                // An array of media controls capabilities
                // Can contain CAPABILITY_PLAY, CAPABILITY_PAUSE, CAPABILITY_STOP, CAPABILITY_SEEK_TO,
                // CAPABILITY_SKIP_TO_NEXT, CAPABILITY_SKIP_TO_PREVIOUS, CAPABILITY_SET_RATING
                capabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_STOP,
                    TrackPlayer.CAPABILITY_SEEK_TO,
                    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                ],

                // An array of capabilities that will show up when the notification is in the compact form on Android
                compactCapabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_SEEK_TO,
                    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                ],
            }).then(() => {
                setReady(true)
            })
        })
    }, [])

    useEffect(() => {
        const fetchMusicUrl = async () => {
            try{
                const resData = await axios.get(`https://somadome.herokuapp.com/music/?musictype=${musicName}`);
                console.log("In music screen", resData)
                if(resData){
                    setTrack((prevState) => ({
                        ...prevState,
                        title : musicName,
                        artist : musicName,
                        url : resData.data,
                        duration : "180"
                    }))
                }
            }catch(err){
                console.log("error", err)
            }
        }
        fetchMusicUrl();
    },[musicName,isReady])

    const handlePlayClick = async () => {
        await TrackPlayer.add([track]);
        const state = await TrackPlayer.getState();
        // if(state === State.Playing){
        //     console.log("The Player is playing")
        // }
        if (!isplaying) {
            TrackPlayer.play();
            setPlaying(true)
        } else if (isplaying) {
            TrackPlayer.pause();
            setPlaying(false)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/wave.jpg")}
                resizeMode="cover"
                style={{ height: hp("100%"), width: wp("100%") }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backIcon}
                        source={require("../../../assets/images/back.png")} />
                </TouchableOpacity>
                <Text style={styles.musicText}>{title ? title : "CLARITY"}</Text>
                <View style={styles.slider}>
                    <Slider
                        value={value}
                        onValueChange={(value) => setValue(value)} />
                </View>
                <View style={styles.buttonContainer}>
                    <Icon name="banckward" size={20} color="white" />
                    <TouchableOpacity style={styles.musicIconContainer}
                        onPress={handlePlayClick}>
                        {!isplaying && <Icon name="caretright" size={28} color="white" />}
                        {isplaying && <Icon name="pause" size={28} color="white" />}
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
        marginTop: hp("2%")
    },
    musicText: {
        fontFamily: "Khula-Regular",
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
        marginTop: hp("60%")
    },
    slider: {
        marginTop: hp("5%")
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp("2%")
    },
    musicIconContainer: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#3890e8',
        marginLeft: wp("10%"),
        marginRight: wp("10%")
    }
})

