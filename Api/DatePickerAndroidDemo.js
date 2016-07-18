'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  DatePickerAndroid
} from 'react-native';

class DatePickerAndroidDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      presetDate: new Date(2016, 4, 8),
      allDate: new Date(2020, 4, 8),
      simpleText: '选择日期',
      minText: '选择一个比今天晚的日期',
      maxText: '选择一个比今天早的日期',
      presetText: '选择日期（默认2020年5月8日）',
      allText: '选择一个在2020/5/1到2016/6/8之间的日期',
    };
  }

  async showPicker(stateKey, options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = '没有选择日期';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DatePickerAndroid</Text>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#0a8acd"
          onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
          <Text style={styles.text}>{this.state.simpleText}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#0a8acd"
          onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})}>
          <Text style={styles.text}>{this.state.presetText}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#0a8acd"
          onPress={this.showPicker.bind(this, 'min', {
            date: this.state.minDate,
            minDate: new Date(),
          })}>
          <Text style={styles.text}>{this.state.minText}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#0a8acd"
          onPress={this.showPicker.bind(this, 'max', {
            date: this.state.maxDate,
            maxDate: new Date(),
          })}>
          <Text style={styles.text}>{this.state.maxText}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#0a8acd"
          onPress={this.showPicker.bind(this, 'all', {
            date: this.state.allDate,
            minDate: new Date(2020, 4, 1),
            maxDate: new Date(2020, 4, 10),
          })}>
          <Text style={styles.text}>{this.state.allText}</Text>
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
  centerText:{textAlign:'center'},
  text: {textAlign:'center',color:'#fff'},
})

module.exports = DatePickerAndroidDemo;
