'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid
} from 'react-native';

class ToastAndroidDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ToastAndroid</Text>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() =>
            ToastAndroid.show('这是一个短暂的提示', ToastAndroid.SHORT)
            }>
          <Text style={styles.btnTxt}>短提示</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() =>
            ToastAndroid.show('这是一个较长的提示', ToastAndroid.LONG)
            }>
          <Text style={styles.btnTxt}>长提示</Text>
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

module.exports = ToastAndroidDemo;
