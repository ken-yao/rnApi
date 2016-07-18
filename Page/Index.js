'use strict';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class IndexPage extends Component {

  render() {
    return (
    	<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:24}}>React Native</Text>
        <Text style={{fontSize:24}}>系列教程</Text>
        <Text style={{fontSize:24}}>API篇</Text>
        <Text style={{marginTop:10}}>向右拖动查看内容</Text>
      </View>
    );
  }

}
