'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid,
  BackAndroid
} from 'react-native';


export default class BackAndroidApi extends Component {
  constructor(props){
    super(props);
    var that = this.props;
    var only = true;
    BackAndroid.addEventListener('hardwareBackPress', function() {
      if(that.navigator && that.navigator.getCurrentRoutes().length > 1){
        that.navigator.pop();
        return true;
      }else if(that.navigator && that.navigator.getCurrentRoutes().length === 1 && only){
        ToastAndroid.show('再按一次退出程序', ToastAndroid.SHORT);
        only = false;
        return true;
      }else if(!only){
        BackAndroid.exitApp(0);
        return true;
      }
      return false;
    });
  }

  componentDidMount(){

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>BackAndroid</Text>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1}>
          <Text style={styles.btnTxt}>返回</Text>
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
