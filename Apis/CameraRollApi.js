'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  CameraRoll
} from 'react-native';

export default class CameraRollApi extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CameraRoll</Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  btn:{backgroundColor:'#dd3333',borderRadius:5,margin:10,padding:10},
  btnTxt:{textAlign:'center',color:'#fff'},
  centerText:{textAlign:'center'}
})
