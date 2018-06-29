import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import I18n from '../language/i18n.js';
import Icon from 'react-native-vector-icons/FontAwesome';
//Native Base Handy UI Components
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import EventEmitter from "react-native-eventemitter";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    EventEmitter.on("language_change", (language)=>{
      console.log("Language Set to Home: ", language);
      I18n.locale = language;
      this.forceUpdate();
    });
  }

  scan_qr = () => {
    //Scan QR
  }

  generate_qr = () => {
    //Generate QR
  }

  render() {
    return (
      <View style={styles.container}>
        <Header androidStatusBarColor="rgba(210, 10, 15, 1)" style={styles.navigationBarStyle}>
          <Left>
          </Left>

          <Title style={styles.navHeaderTitle}>{I18n.t("Dashboard")}</Title>

          <Right>

          </Right>
        </Header>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.qrbutton}>
            <View>
              <Text style={styles.qrbuttonTxt}>{I18n.t("ScanQRCode_btn")}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.qrbutton}>
            <View>
              <Text style={styles.qrbuttonTxt}>{I18n.t("GenerateQRCode_btn")}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  qrbutton: {
    flex: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: "rgb(244, 245, 247)",
    borderWidth: 0.6,
    borderColor: 'darkgrey'
  },
  qrbuttonTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: "600"
  },
  navigationBarStyle: {
    backgroundColor:'rgba(210, 10, 15, 1)'
  },
  navigationBarTitleStyle: {
    alignSelf: 'center', color: "#fff", fontSize: 24, fontWeight: '600', alignItems: 'center', justifyContent: 'center'
  },
  navHeaderTitle: {
    alignSelf: 'center', textAlign: 'center', fontSize: 22, color: "#fff", fontWeight: '600'
  }
});
