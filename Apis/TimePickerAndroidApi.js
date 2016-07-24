'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TimePickerAndroid
} from 'react-native';

/**Returns e.g. '3:05'.*/
function _formatTime(hour, minute) {
  return hour + ':' + (minute < 10 ? '0' + minute : minute);
}

export default class TimePickerAndroidApi extends Component {
  constructor(props){
    super(props);
    this.state = {
      isoFormatText: '选择时间（24小时制）',
      presetHour: 7,
      presetMinute: 30,
      presetText: '选择一个时间，默认：7：30AM',
      simpleText: '选择时间'
    };
  }

  async showPicker(stateKey, options) {
      try {
        const {action, minute, hour} = await TimePickerAndroid.open(options);
        var newState = {};
        if (action === TimePickerAndroid.timeSetAction) {
          newState[stateKey + 'Text'] = _formatTime(hour, minute);
          newState[stateKey + 'Hour'] = hour;
          newState[stateKey + 'Minute'] = minute;
          newState.Info = _formatTime(hour, minute);
        } else if (action === TimePickerAndroid.dismissedAction) {
          newState[stateKey + 'Text'] = 'dismissed';
          newState.Info = '你取消了选择时间';
        }
        this.setState({simpleText: newState.Info});
      } catch ({code, message}) {
        console.warn(`Error in example '${stateKey}': `, message);
      }
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TimePickerAndroid</Text>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#0a8acd"
          onPress={this.showPicker.bind(this)}>
          <Text style={styles.text}>{this.state.simpleText}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#0a8acd"
          onPress={this.showPicker.bind(this, 'preset', {
            hour: this.state.presetHour,
            minute: this.state.presetMinute,
          })}>
          <Text style={styles.text}>{this.state.presetText}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#0a8acd"
          onPress={this.showPicker.bind(this, 'isoFormat', {
            hour: this.state.isoFormatHour,
            minute: this.state.isoFormatMinute,
            is24Hour: true,
          })}>
          <Text style={styles.text}>{this.state.isoFormatText}</Text>
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
