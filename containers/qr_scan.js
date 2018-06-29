import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Actions } from 'react-native-router-flux';
import I18n from '../language/i18n.js';
//Native Base Handy UI Components
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import EventEmitter from "react-native-eventemitter";

export default class QRScanner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    EventEmitter.on("language_change", (language)=>{
      console.log("Language Set to Content: ", language);
      I18n.locale = language;
      this.forceUpdate();
    });
  }

  onSuccess(e) {
    //console.log("Scanned Code", e);
    var jsonString = e.data;
    //console.log("JSON String: ", jsonString);
    try{
      var jsonObj = JSON.parse(jsonString);
      if((jsonObj != undefined || jsonObj != null) && (jsonObj.order_type != undefined || jsonObj.order_type != null)){
        Actions.contents({contents: jsonObj, entity_editable: false});
      }else{
        alert("Scanned QR Code is Invalid");
      }
    } catch (e) {
      alert("Scanned QR Code is Invalid");
    }
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <View style={styles.container}>
            <Header androidStatusBarColor="rgba(210, 10, 15, 1)" style={styles.navigationBarStyle}>
              <Left>
              </Left>

              <Title style={styles.navHeaderTitle}>{I18n.t("QRScreenTitle")}</Title>

              <Right>

              </Right>
            </Header>
          </View>
        }
        showMarker={true}
        reactivate={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  navigationBarStyle: {
    backgroundColor:'rgba(210, 10, 15, 1)', width: Dimensions.get('window').width
  },
  navigationBarTitleStyle: {
    alignSelf: 'center', color: "#fff", fontSize: 24, fontWeight: '600', alignItems: 'center', justifyContent: 'center'
  },
  navHeaderTitle: {
    alignSelf: 'center', textAlign: 'center', fontSize: 22, color: "#fff", fontWeight: '600'
  }
});
