'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Geolocation
} from 'react-native';

export default class GeolocationApi extends Component {
  constructor(props){
    super(props);
    this.state = {
      myPosition:'未知',
      watchMyPosition: '未知'
    };
  }

  getPosition(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var myPosition = JSON.stringify(position);
        this.setState({myPosition});
      },
      (error) => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  watchPosition(){
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var watchMyPosition = JSON.stringify(position);
      this.setState({watchMyPosition});
    });
  }

  stopWatchPosition(){
    navigator.geolocation.clearWatch(this.watchID);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Geolocation</Text>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.getPosition.bind(this)}>
          <Text style={styles.btnTxt}>获取我的位置</Text>
        </TouchableHighlight>
        <Text style={styles.centerText}>我的当前位置：{this.state.myPosition}</Text>

        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.watchPosition.bind(this)}>
          <Text style={styles.btnTxt}>监控我的位置</Text>
        </TouchableHighlight>
        <Text style={styles.centerText}>我的实时位置：{this.state.watchMyPosition}</Text>

        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.stopWatchPosition.bind(this)}>
          <Text style={styles.btnTxt}>停止监控位置</Text>
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
