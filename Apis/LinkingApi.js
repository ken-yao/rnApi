'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid,
  Linking
} from 'react-native';

export default class LinkingApi extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  openURL(url){
    Linking.canOpenURL(url).then(
      supported => {
        if(supported){
          Linking.openURL(url);
        }else{
          ToastAndroid.show('无法识别该URI', ToastAndroid.SHORT);
        }
      }
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Linking</Text>

        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.openURL('http://www.baidu.com')}>
          <Text style={styles.btnTxt}>打开百度首页</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.openURL('geo:37.484847,-122.148386')}>
          <Text style={styles.btnTxt}>打开地理位置</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.openURL('tel:13925542760')}>
          <Text style={styles.btnTxt}>拨打电话</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.openURL('sms:13925542760')}>
          <Text style={styles.btnTxt}>发送短信</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.openURL('mail:403749023@qq.com')}>
          <Text style={styles.btnTxt}>发送邮件</Text>
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
  btnTxt:{textAlign:'center',color:'#fff'},
  centerText:{textAlign:'center'}
})
