import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableHighlight, Navigator, DrawerLayoutAndroid} from 'react-native';

import Index from './Page/Index';
import TestPageOne from './Page/TestPageOne';
import TestPageTwo from './Page/TestPageTwo';
import TestPageThree from './Page/TestPageThree';
import TestPageFour from './Page/TestPageFour';

import AlertApi from './Apis/AlertApi';
import ToastAndroidApi from './Apis/ToastAndroidApi';
import VibrationApi from './Apis/VibrationApi';
import DatePickerAndroidApi from './Apis/DatePickerAndroidApi';
import TimePickerAndroidApi from './Apis/TimePickerAndroidApi';
import DimensionsApi from './Apis/DimensionsApi';
import PixelRatioApi from './Apis/PixelRatioApi';
import BackAndroidApi from './Apis/BackAndroidApi';
import NetInfoApi from './Apis/NetInfoApi';
import ClipboardApi from './Apis/ClipboardApi';
import AppStateApi from './Apis/AppStateApi';


class rnApi extends Component {
  constructor(props){
      super(props);
      let menuArray = [{id:'Index'},{id:'TestPageOne'},{id:'TestPageTwo'},{id:'AlertApi'},{id:'ToastAndroidApi'},{id:'VibrationApi'},{id:'DatePickerAndroidApi'},{id:'TimePickerAndroidApi'},{id:'DimensionsApi'},{id:'PixelRatioApi'},{id:'BackAndroidApi'},{id:'NetInfoApi'},{id:'ClipboardApi'},{id:'AppStateApi'}];
      this.state = {
          dataSource : new ListView.DataSource({
              rowHasChanged:(row1,row2) => row1 !== row2,
          }).cloneWithRows(menuArray),
      };
      }

      openDrawer(){
          this.refs['DRAWER'].openDrawer();
      };

      closeDrawer(){
          this.refs['DRAWER'].closeDrawer();
      }

      goTo(n) {
          nav.push({
              id: n.id,
          });
          this.closeDrawer();
      }

      renderScene(route, nav) {
        switch (route.id){
            case 'Index':
                return (<Index navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'TestPageOne':
                return (<TestPageOne navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'TestPageTwo':
                return (<TestPageTwo navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'AlertApi':
                return (<AlertApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'ToastAndroidApi':
                return (<ToastAndroidApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'VibrationApi':
                return (<VibrationApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'DatePickerAndroidApi':
                return (<DatePickerAndroidApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'TimePickerAndroidApi':
                return (<TimePickerAndroidApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'DimensionsApi':
                return (<DimensionsApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'PixelRatioApi':
                return (<PixelRatioApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'BackAndroidApi':
                return (<BackAndroidApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'NetInfoApi':
                return (<NetInfoApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'ClipboardApi':
                return (<ClipboardApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'AppStateApi':
                return (<AppStateApi navigator={nav} {...this.props} {...route.passProps} />);
                break;
        }
    }

    render() {
      var navigationView = (
            <View style={styles.container}>
                <Text style={styles.menuTitle}>React Native API</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo(rowData)}><Text style={styles.menuItem}>{rowData.id}</Text></TouchableHighlight>}
                  />
            </View>
      );

      return (
          <DrawerLayoutAndroid
              ref={'DRAWER'}
              drawerWidth={300}
              drawerPosition={DrawerLayoutAndroid.positions.left}
              renderNavigationView={() => navigationView}>

              <View style={styles.container}>
                  <Navigator
                      initialRoute={{id:'Index'}}
                      ref={((nav) => { global.nav = nav })}
                      renderScene={this.renderScene.bind(this)}
                      configureScene={(route) => {
                          if (route.sceneConfig) {
                            return route.sceneConfig;
                          }
                          return Navigator.SceneConfigs.FloatFromRight;
                      }}
                  />
              </View>

          </DrawerLayoutAndroid>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{flex:1},
    menuTitle:{marginTop: 16, marginBottom:16, color:'#4f4f4f', fontSize: 20, textAlign: 'center' },
    menuItem:{flex:1, alignItems:'center',justifyContent:'center', flexDirection:'column', margin:10},
    menuText:{fontSize:18}
  });
AppRegistry.registerComponent('rnApi', () => rnApi);
