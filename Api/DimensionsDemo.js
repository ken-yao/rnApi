'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';

class DimensionsDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      wWidth: Dimensions.get('window').width,
      hHeight: Dimensions.get('window').height,
      width:null,
      height:null
    };
  }

  getWidth(){
    this.setState({
      width: Dimensions.get('window').width
    })
  }

  getHeight(){
    this.setState({
      height: Dimensions.get('window').height
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DimensionsDemo</Text>
        <Text style={styles.centerText}>窗口宽度：{this.state.wWidth}</Text>
        <Text style={styles.centerText}>窗口高度：{this.state.hHeight}</Text>
        <View style={styles.divider}></View>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.getWidth.bind(this)}>
          <Text style={styles.btnTxt}>获取窗口宽度</Text>
        </TouchableHighlight>
        <Text style={styles.centerText}>{this.state.width}</Text>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.getHeight.bind(this)}>
          <Text style={styles.btnTxt}>获取窗口高度</Text>
        </TouchableHighlight>
        <Text style={styles.centerText}>{this.state.height}</Text>
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

module.exports = DimensionsDemo;
