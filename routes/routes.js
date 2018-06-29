import React, { Component } from 'react';
import { StyleSheet, View, PixelRatio, Alert, AsyncStorage, NetInfo,Text, TouchableOpacity, Image, Dimensions, Keyboard } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QRScanner from '../containers/qr_scan';
import Dashboard from '../containers/dashboard';
import Inbound from '../containers/inbound';
import Outbound from '../containers/outbound';
import Settings from '../containers/settings';
import { YellowBox } from 'react-native';

const TabIcon = ({ focused, title }) => {
  switch (title) {
    case 'Scan':
      return (
        <View>
          <Icon color={focused ? 'rgba(210, 10, 15, 1)' : 'grey' } name="qrcode-scan" size={35}/>
        </View>
      )
    case 'Dashboard':
      return (
        <View>
          <Icon color={focused ? 'rgba(210, 10, 15, 1)' : 'grey' } name="view-dashboard" size={35}/>
        </View>
      )
    case 'Inbound':
      return (
        <View>
          <Icon color={focused ? 'rgba(210, 10, 15, 1)' : 'grey' } name="arrow-down-bold-box-outline" size={35}/>
        </View>
      )
    case 'Outbound':
      return (
        <View>
          <Icon color={focused ? 'rgba(210, 10, 15, 1)' : 'grey' } name="arrow-up-bold-box-outline" size={35}/>
        </View>
      )
    case 'Settings':
      return (
        <View>
          <Icon color={focused ? 'rgba(210, 10, 15, 1)' : 'grey' } name="settings-outline" size={35}/>
        </View>
      )
  }
}

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  }

  tab1_pressed = () => {
    Keyboard.dismiss();
    Actions.replace('tab1');
  }

  tab2_pressed = () => {
    Keyboard.dismiss();
    Actions.replace('tab2');
  }

  tab3_pressed = () => {
    Keyboard.dismiss();
    Actions.replace('tab3');
  }

  tab4_pressed = () => {
    Keyboard.dismiss();
    Actions.replace('tab4');
  }

  tab5_pressed = () => {
    Keyboard.dismiss();
    Actions.replace('tab5');
  }

  render() {
    return (
      <Router>
          <Scene key="root">
            <Scene key="tabs" tabs={true} swipeEnabled={false} activeTintColor="rgba(210, 10, 15, 1)" tabBarStyle={styles.tabBar} default="tab1" tabBarPosition='bottom' hideNavBar={true}>
              <Scene key="tab1" title="Dashboard" titleStyle={styles.navigationBarTitleStyle} navigationBarStyle={styles.navigationBarStyle} hideNavBar={true} component={Dashboard} initial={true} icon={TabIcon} tabBarOnPress={() => this.tab1_pressed()}/>
              <Scene key="tab2" title="Scan" titleStyle={styles.navigationBarTitleStyle} navigationBarStyle={styles.navigationBarStyle} hideNavBar={true} component={QRScanner} icon={TabIcon} tabBarOnPress={() => this.tab2_pressed()}/>
              <Scene key="tab5" title="Settings" titleStyle={styles.navigationBarTitleStyle} navigationBarStyle={styles.navigationBarStyle} hideNavBar={true} component={Settings} icon={TabIcon} tabBarOnPress={() => this.tab5_pressed()}/>
            </Scene>
          </Scene>
        </Router>
    );
  }
}

// <Scene key="tab3" title="Inbound" titleStyle={styles.navigationBarTitleStyle} navigationBarStyle={styles.navigationBarStyle} hideNavBar={true} component={Inbound} icon={TabIcon} tabBarOnPress={() => this.tab3_pressed()}/>
// <Scene key="tab4" title="Outbound" titleStyle={styles.navigationBarTitleStyle} navigationBarStyle={styles.navigationBarStyle} hideNavBar={true} component={Outbound} icon={TabIcon} tabBarOnPress={() => this.tab4_pressed()}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 1 / PixelRatio.get(),
    backgroundColor: 'ghostwhite',
    opacity: 0.90,
    height: 80
  },
  navigationBarStyle: {
    backgroundColor:'rgba(210, 10, 15, 1)', height: 80
  },
  navigationBarTitleStyle: {
    alignSelf: 'center', color: "#fff", fontSize: 24, fontWeight: '600'
  },
  loginNavBarStyle: {
    backgroundColor:"rgba(109, 110, 107, 1)", height: 140
  }
});
