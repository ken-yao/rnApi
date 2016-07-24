'use strict';
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class AlertApi extends Component {
  constructor(props){
      super(props);
      this.state = {
          linkColor: '#00cc33',
          description: '请点击按钮'
      };
  }

  render() {
    return (
    	<View style={styles.container}>
        <Text style={styles.title}>Alert</Text>
        <TouchableHighlight style={styles.button} onPress={() => Alert.alert('这是弹出信息框标题', '这是弹出信息框的内容信息。')}>
          <Text style={styles.btnText}>基本弹出信息框</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor="#0a8acd" activeOpacity={1} onPress={() => Alert.alert(
          '提示',
          '这是一个提示框',
          [
            {text: '知道了', onPress: () => this.setState({description:'你点击了按钮'})},
          ]
        )}>
          <Text style={styles.btnText}>弹出提示框</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor="#0a8acd" activeOpacity={1} onPress={() => Alert.alert(
          '提示',
          '这是一个确认框',
          [
            {text: '取消', onPress: () => this.setState({description:'你点击了取消按钮'}),style:'cancel'},
            {text: '确认', onPress: () => this.setState({description:'你点击了确认按钮'})}
          ]
        )}>
          <Text style={styles.btnText}>弹出确认框</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, {'backgroundColor': this.state.linkColor}]} onPress={() => Alert.alert('这是弹出信息框标题',
         '这是弹出信息框的内容信息。',
         [
           {text: '稍后再说', onPress: () => this.setState({linkColor: '#0a8acd', description:'你点击了【稍后再说】按钮'})},
           {text: '取消', onPress: () => this.setState({linkColor: '#0a8acd', description:'你点击了【取消】按钮'}), style: 'cancel'},
           {text: '确定', onPress: () => this.setState({linkColor: '#0a8acd', description:'你点击了【确定】按钮'})}
         ]
        )}>
          <Text style={styles.btnText}>有按钮的弹出信息框</Text>
        </TouchableHighlight>
        <Text style={styles.centerText}>{this.state.description}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  button:{backgroundColor:'#dd3333',height:44,justifyContent:'center',margin:10,borderRadius:4},
  btnText:{color:'#fff',textAlign:'center',fontSize:20},
  centerText:{textAlign:'center'}
});
