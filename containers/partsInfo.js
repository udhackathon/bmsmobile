import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity , FlatList, Alert} from "react-native";
import { Container, Content, Header, Left, Body, Right, Button, CheckBox, Title, Subtitle, Card, CardItem, H1, H2, H3, Picker, Form,  Item, Label, Input, Item as FormItem } from 'native-base';
import I18n from '../language/i18n.js';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

export default class PartsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parts_info: {
        "id": "1",
        "warehouseLoc":"Ageo",
        "partName":"Engine",
        "country":"Japan",
        "primary_Inventory":{
          "max_count": 100,
          "current_count": 60
        },
        "buffer_inventory":[{
            "id": 10,
            "max_count": 100,
            "current_count": 0
        }]
      }
    }
  }

  componentDidMount(){
    //Get Parts Information:
    var parts_info = require('../api/partsInfo.json');
    this.setState({parts_info: parts_info});
    //this.forceUpdate();
  }

  addBufferLocation = () => {

    // Works on both iOS and Android
    Alert.alert(
      'Create Buffer Location',
      'Are you sure you want to create a new buffer location ?',
      [
        {text: 'Yes', onPress: () => this.newBufferLocation()},
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  newBufferLocation = () => {
    var parts_info = {...this.state.parts_info};
    buffer_info = parts_info.buffer_inventory;
    for(item in buffer_info){
      if(item == buffer_info.length - 1){
        //Last Item in the buffer location, get the id and increment the id for the new buffer location Added
        var new_buffer_id = buffer_info[item]["id"] + 1;
        const buffer_info_item = { "id": new_buffer_id, "max_count": 100, "current_count": 0};
        buffer_info.push(buffer_info_item);
        break;
      }
    }
    parts_info.buffer_inventory = buffer_info;
    this.setState({parts_info: parts_info});
    //console.log("Parts Info: ", this.state.parts_info);
  }

  inputOnChange = (index) => {
    console.log("Value Changed at Buffer Location: ", index + 1);
  }

  render(){
    return(
      <Container style={styles.container}>
        <Header androidStatusBarColor="rgba(210, 10, 15, 1)" style={styles.navigationBarStyle}>
          <Left>
          </Left>

          <Title style={styles.navHeaderTitle}>{I18n.t("PartsInfoScreen")}</Title>

          <Right>

          </Right>
        </Header>
        <Content style={{padding: 10}}>
          <Card style={{flex: 1}}>
            <Label style={{paddingTop: 10, paddingLeft: 20, color: "rgb(84, 84, 84)", fontWeight: 'bold'}}>Parts Information</Label>
            <CardItem>
              <Item floatingLabel style={{marginTop:0}}>
                <Label style={styles.labelTitle}>Part Number<Text style={{color:'red'}}> *</Text></Label>
                <Input />
              </Item>
            </CardItem>

            <CardItem>
              <Item floatingLabel style={{marginTop:0}}>
                <Label style={styles.labelTitle}>Part Name<Text style={{color:'red'}}> *</Text></Label>
                <Input />
              </Item>
            </CardItem>

            <CardItem>
              <Item floatingLabel style={{marginTop:0}}>
                <Label style={styles.labelTitle}>Part Description</Label>
                <Input />
              </Item>
            </CardItem>

            <CardItem>
              <Item floatingLabel style={{marginTop:0}}>
                <Label style={styles.labelTitle}>Warehouse Location<Text style={{color:'red'}}> *</Text></Label>
                <Input />
              </Item>
            </CardItem>

            <CardItem>
              <Item floatingLabel style={{marginTop:0}}>
                <Label style={styles.labelTitle}>Country<Text style={{color:'red'}}> *</Text></Label>
                <Input />
              </Item>
            </CardItem>
          </Card>

          <Card style={{flex: 1}}>
            <Label style={{paddingTop: 10, paddingLeft: 20, color: "rgb(84, 84, 84)", fontWeight: 'bold'}}>Primary Inventary</Label>
            <CardItem>
              <Item floatingLabel style={{marginTop:0}}>
                <Label style={styles.labelTitle}>Inventory Count<Text style={{color:'red'}}> *</Text></Label>
                <Input value={this.state.parts_info.primary_Inventory.current_count.toString()} editable={true} onChangeText={(index) => {this.inputOnChange(index)}}/>
              </Item>
            </CardItem>
          </Card>

          <View>
            <FlatList
              data={this.state.parts_info.buffer_inventory}
              extraData={this.state}
              renderItem={({item, index}) =>
                <Card style={{flex: 1}}>
                  <Label style={{paddingTop: 10, paddingLeft: 20, color: "rgb(84, 84, 84)", fontWeight: 'bold'}}>Buffer Inventary {index + 1}</Label>
                  <CardItem>
                    <Item floatingLabel style={{marginTop:0}}>
                      <Label style={styles.labelTitle}>Inventory Count<Text style={{color:'red'}}> *</Text></Label>
                      <Input value={item.current_count.toString()} editable={true} onChangeText={(index) => {this.inputOnChange(index)}}/>
                      <Input />
                    </Item>
                  </CardItem>
                </Card>
              }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Content>
        <ActionButton buttonColor="rgba(210, 10, 15, 1)" onPress={() => this.addBufferLocation()}>
        </ActionButton>
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
  },
  labelTitle: {
    color: "rgb(84, 84, 84)", fontSize: 16, fontWeight: "600"
  },
  buttonTitle: {
    textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "600"
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})

// <ActionButton buttonColor="rgba(231,76,60,1)">
//   <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
//     <Icon name="md-create" style={styles.actionButtonIcon} />
//   </ActionButton.Item>
//   <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
//     <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
//   </ActionButton.Item>
//   <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
//     <Icon name="md-done-all" style={styles.actionButtonIcon} />
//   </ActionButton.Item>
// </ActionButton>
