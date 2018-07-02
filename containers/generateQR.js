import React from 'react';
import {View, Text, StyleSheet, Dimensions } from "react-native";
import { Container, Content, Header, Left, Body, Right, Button, CheckBox, Title, Subtitle, Card, CardItem, H1, H2, H3, Picker, Form,  Item, Label, Input, Item as FormItem } from 'native-base';
import I18n from '../language/i18n.js';

export default class GenerateQR extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Container style={styles.container}>
        <Header androidStatusBarColor="rgba(210, 10, 15, 1)" style={styles.navigationBarStyle}>
          <Left>
          </Left>

          <Title style={styles.navHeaderTitle}>{I18n.t("GenerateQRCode_btn")}</Title>

          <Right>

          </Right>
        </Header>
        <Content style={{padding: 10}}>
          <Card style={{flex: 1}}>
            <CardItem>
              <Item floatingLabel style={{marginTop:5}}>
                <Label style={{fontSize: 16, color:'black', fontWeight:'bold'}}>{I18n.t('WarehouseID')} <Text style={{color:'red'}}> *</Text></Label>
                <Input />
              </Item>
            </CardItem>

            <CardItem>
              <Item floatingLabel style={{marginTop:5}}>
                <Label style={{fontSize: 16, color:'black', fontWeight:'bold'}}>{I18n.t('LocationID')} <Text style={{color:'red'}}> *</Text></Label>
                <Input />
              </Item>
            </CardItem>

            <CardItem>
              <Button style={{flex: 1, backgroundColor: "rgba(210, 10, 15, 1)", alignItems:'center', justifyContent: 'center'}} >
                <Text style={{textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold"}}>Generate QR Code</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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
})

// <View style={styles.container}>
//   <Header androidStatusBarColor="rgba(210, 10, 15, 1)" style={styles.navigationBarStyle}>
//     <Left>
//     </Left>
//
//     <Title style={styles.navHeaderTitle}>{I18n.t("GenerateQRCode_btn")}</Title>
//
//     <Right>
//
//     </Right>
//   </Header>
// </View>
