import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Meditation from '../Learn/Meditation';
import Breathwork from '../Learn/Breathwork';
import SoundHealing from '../Learn/SoundHealing';
import { Tab, Tabs } from 'native-base';


const Use = ({ navigation }) => {
    return(
      <Tabs>
      <Tab heading="Meditation">
        <Meditation />
      </Tab>
      <Tab heading="Breathwork">
        <Breathwork />
      </Tab>
      <Tab heading="SoundHealing">
         <SoundHealing/>
      </Tab>  
</Tabs>
    )
}

export default Use;