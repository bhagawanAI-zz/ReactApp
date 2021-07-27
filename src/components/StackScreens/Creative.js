import React from 'react'
import { View, Text ,StyleSheet,Image} from 'react-native'
import FeelTypes from '../Common/FeelTypes';
import Musicgrid from '../Common/Musicgrid';
import TimeContainer from '../Common/TimeContainer';

 const Creative = ({navigation}) => {
    const imagePath = navigation.state.params.path;
    const musicTypeNameArray = navigation.state.params.musicnames;
    return (
        <View style={style.container}>
            <View style={style.type}>
            <FeelTypes imageType="image1" text={"CLASSIC\nMEDITATION"}/>
            <FeelTypes imageType="image2" text={"SOUND\nHEALING"}/>
            <FeelTypes imageType="image3" text={"SOMADOME\nSESSION"}/> 
            <FeelTypes imageType="image4" text={"BREATHWORK"}/> 
            </View>
            <View style={style.time}>
                <TimeContainer />
                
            </View>
            <View style={style.create}>
                <Musicgrid navigation={navigation} text="Create" imagePath={imagePath}/>
                
            </View>
            <View style={style.manifest}>
            <Musicgrid navigation={navigation} text="Manifest" imagePath={imagePath}/>
            </View>
        
            <View style={style.love}>
            <Musicgrid navigation={navigation} text="Love" imagePath={imagePath}/>
            
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column"
    },
    type:{
        flex:1.2,
        backgroundColor:"white",
        flexDirection:"row",
        // alignItems:"center",
        justifyContent:"space-around",
        borderBottomColor: 'black',
        borderBottomWidth: 1,   


    },
    time:{
        flex:1,
        backgroundColor:"white",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        
    },
    create:{
        flex:1,
        backgroundColor:"white",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        
    },
    manifest:{
        flex:1,
        backgroundColor:"grey",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    love:{
        flex:1,
        backgroundColor:"pink",  
    },
    textContainer:{
        
       
    }
})

export default Creative