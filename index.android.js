import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableHighlight, Navigator, DrawerLayoutAndroid} from 'react-native';

import Index from './Page/Index';
import TestPageOne from './Page/TestPageOne';
import TestPageTwo from './Page/TestPageTwo';
import TestPageThree from './Page/TestPageThree';
import TestPageFour from './Page/TestPageFour';

import AlertApi from './Apis/AlertApi';


class rnApi extends Component {
  constructor(props){
      super(props);
      let menuArray = [{id:'Index'},{id:'TestPageOne'},{id:'TestPageTwo'},{id:'AlertApi'}];
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
                      initialRoute={{id:'AlertApi'}}
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
    container:{
      flex:1,
    },
    menuTitle:{
      marginTop: 16,
      marginBottom:16,
      color:'#4f4f4f',
      fontSize: 20,
      textAlign: 'center'
    },
    menuItem:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      margin:10,
    },
    menuText:{
      fontSize:18
    }
  });
AppRegistry.registerComponent('rnApi', () => rnApi);
