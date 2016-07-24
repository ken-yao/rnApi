'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PixelRatio
} from 'react-native';

export default class PixelRatioApi extends Component {
  constructor(props){
    super(props);
    this.state = {
      pr:PixelRatio.get(),
      prValue:null,
      fs:PixelRatio.getFontScale(),
      boxWidth:200,
      boxRoundWidth:256.3,
      px:null,
      pxRound:null, //转换为最接近的适合宽度
      RoundPX:null  //转换为最接近的适合宽度的像素值
    };
  }

  getPixelRatio(){
    this.setState({
      prValue: PixelRatio.get()
    })
  }

  getPX(){
    this.setState({
      px: PixelRatio.getPixelSizeForLayoutSize(this.state.boxWidth)
    })
  }

  getRoundPX(){
    this.setState({
      pxRound: PixelRatio.roundToNearestPixel(this.state.boxRoundWidth),  //获得最接近的合适宽度
      RoundPX: PixelRatio.getPixelSizeForLayoutSize(this.state.pxRound)   //获得最接近的合适宽度后转换为的像素值
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>PixelRatio</Text>
        <Text style={styles.centerText}>像素密度：{this.state.pr}</Text>
        <Text style={styles.centerText}>字体缩放比例：{this.state.fs}</Text>
        <View style={styles.divider}></View>
        <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.getPixelRatio.bind(this)}>
          <Text style={styles.btnTxt}>获取屏幕密度</Text>
        </TouchableHighlight>
        <Text style={styles.centerText}>{this.state.prValue}</Text>
        <View style={styles.divider}></View>
        <View style={[styles.box,{width:this.state.boxWidth}]}>
          <Text style={styles.centerText}>这是一个宽度为{this.state.boxWidth}的盒子</Text>
          <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.getPX.bind(this)}>
            <Text style={styles.btnTxt}>点击获取像素值</Text>
          </TouchableHighlight>
          <Text style={styles.centerText}>{this.state.px}</Text>
        </View>
        <View style={[styles.box,{width:this.state.boxRoundWidth}]}>
          <Text style={styles.centerText}>这是一个宽度为{this.state.boxRoundWidth}的盒子</Text>
          <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.getRoundPX.bind(this)}>
            <Text style={styles.btnTxt}>点击获取像素值</Text>
          </TouchableHighlight>
          <Text style={styles.centerText}>{this.state.pxRound}</Text>
          <Text style={styles.centerText}>{this.state.RoundPX}</Text>
        </View>
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
  centerText:{textAlign:'center'},
  box:{margin:10,borderWidth:1,borderColor:'#0a8acd',padding:20,alignSelf:'center'}
})
