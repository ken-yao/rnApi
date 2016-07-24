'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid,
  NetInfo
} from 'react-native';

export default class NetInfoApi extends Component {
  constructor(props){
    super(props);
    this.state = {
      netStatus:''
    };
  }

  componentDidMount(){
    var that = this;
    NetInfo.addEventListener(
      'change', function(isConnected){
        that.setState({netStatus: isConnected});
        ToastAndroid.show('当前网络状态是：' + isConnected, ToastAndroid.SHORT);
      }
    );
  }

  componentWillUnmount(){
    NetInfo.removeEventListener(
      'change', function(connectInfo){
        ToastAndroid.show(connectInfo, ToastAndroid.SHORT);
      }
    );
  }

  getNetInfo(){
    NetInfo.isConnected.fetch().then(isConnected => {
      ToastAndroid.show('当前网络状态是：' +  (isConnected ? '在线' : '离线'), ToastAndroid.SHORT);
      this.setState({netStatus: isConnected ? '在线' : '离线'});
    });
  }
  getNetInfos(){
    NetInfo.isConnectionExpensive().then(isConnectionExpensive => {
      ToastAndroid.show('当前网络状态是：' +  (isConnectionExpensive ? 'Expensive' : 'Not Expensive'), ToastAndroid.SHORT);
      this.setState({netStatus: isConnectionExpensive ? 'Expensive' : 'Not Expensive'});
    }).catch(error => {
      console.log(error);
    });
  }
  watchNetInfo(){
    NetInfo.isConnected.addEventListener(
      'change', function(){
        console.log('watching...');
      }
    );
    NetInfo.isConnected.fetch().done(isConnected => {
      ToastAndroid.show('当前网络状态是：' +  (isConnected ? '在线' : '离线'), ToastAndroid.SHORT);
      this.setState({netStatus: isConnected ? '在线' : '离线'});
    });
  }
  stopWatchNetInfo(){
    NetInfo.removeEventListener(
      'change', function(connectInfo){
        console.log(connectInfo);
        ToastAndroid.show(connectInfo, ToastAndroid.SHORT);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>NetInfo</Text>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.getNetInfo.bind(this)}>
          <Text style={styles.btnTxt}>获取网络信息</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.getNetInfos.bind(this)}>
          <Text style={styles.btnTxt}>获取网络信息</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.watchNetInfo.bind(this)}>
          <Text style={styles.btnTxt}>开始网络监测</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.stopWatchNetInfo.bind(this)}>
          <Text style={styles.btnTxt}>停止网络监测</Text>
        </TouchableHighlight>
        <Text>当前的网络状态：{this.state.netStatus}</Text>
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
