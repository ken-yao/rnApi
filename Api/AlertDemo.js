'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';

class AlertDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Alert</Text>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => Alert.alert(
          '提示',
          '这是一个提示框',
          [
            {text: '知道了', onPress: () => this.setState({status:'你点击了按钮'})},
          ]
        )}>
          <Text style={styles.btnTxt}>弹出提示框</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => Alert.alert(
          '提示',
          '这是一个确认框',
          [
            {text: '取消', onPress: () => this.setState({status:'你点击了取消按钮'}),style:'cancel'},
            {text: '确认', onPress: () => this.setState({status:'你点击了确认按钮'})}
          ]
        )}>
          <Text style={styles.btnTxt}>弹出确认框</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => Alert.alert(
          '提示',
          '这是一个询问框',
          [
            {text: '下次再说', onPress: () => this.setState({status:'你想真的想下次再说啊，下次说什么好呢？'})},
            {text: '取消', onPress: () => this.setState({status:'你点击了取消按钮'}),style:'cancel'},
            {text: '确认', onPress: () => this.setState({status:'你点击了确认按钮'})}
          ]
        )}>
          <Text style={styles.btnTxt}>弹出询问框</Text>
        </TouchableHighlight>
        <Text style={styles.centerText}>{this.state.status}</Text>
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

module.exports = AlertDemo;
