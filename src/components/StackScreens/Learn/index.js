import React, {Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Meditation from './Meditation'
import Breathwork from './Breathwork'
import SDMeditation from './SDMeditation';
import SoundHealing from './SoundHealing';
import { Tab, Tabs } from 'native-base';


class Learn extends Component {

  constructor(props){
      super(props);
      this.state = { 

   }
}

  
render(){
  
  return (
    
    <Tabs>
          <Tab heading="Meditation">
            <Meditation />
          </Tab>
          <Tab heading="Breathwork">
            <Breathwork />
          </Tab>
          <Tab heading="SDMeditation">
            <SDMeditation />
          </Tab>
          <Tab heading="SoundHealing">
           <SoundHealing/>
          </Tab>  
    </Tabs>
  );
}}
export default Learn;
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});