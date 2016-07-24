'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Clipboard
} from 'react-native';

export default class ClipboardApi extends Component {
  constructor(props){
    super(props);
    this.state = {
      sentence: '处处随缘住，无求梦亦安！',
      copiedText:null
    };
  }

  async setToClipboard(){
    if(this.state.sentence){
      Clipboard.setString(this.state.sentence);
    }
  }

  async getFromClipboard(){
    try{
      var content = await Clipboard.getString();
      if(content){
        this.setState({copiedText:content});
      }else{
        this.setState({copiedText:'剪贴板为空'});
      }
    }catch(e){
      this.setState({copiedText: e.message});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Clipboard</Text>
        <Text style={styles.centerText}>{this.state.sentence}</Text>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.setToClipboard.bind(this)}>
          <Text style={styles.btnTxt}>复制文字到剪贴板</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.getFromClipboard.bind(this)}>
          <Text style={styles.btnTxt}>从剪贴板粘贴文字</Text>
        </TouchableHighlight>
        <Text style={styles.centerText}>{this.state.copiedText}</Text>
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
