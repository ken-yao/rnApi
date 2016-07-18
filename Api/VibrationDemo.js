'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Vibration
} from 'react-native';

class VibrationDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Vibration</Text>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => Vibration.vibrate()}>
          <Text style={styles.btnTxt}>震动</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => Vibration.vibrate([0, 500, 200, 500])}>
          <Text style={styles.btnTxt}>震动</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => Vibration.vibrate([0, 500, 200, 500], true)}>
          <Text style={styles.btnTxt}>震动</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => Vibration.cancel()}>
          <Text style={styles.btnTxt}>取消震动</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  btn:{backgroundColor:'#dd3333',borderRadius:5,margin:10,padding:10},
  btnTxt:{textAlign:'center',color:'#fff'}
})

module.exports = VibrationDemo;
