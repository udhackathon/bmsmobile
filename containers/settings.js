import React from 'React';
import { Platform, PropTypes, AsyncStorage, ScrollView, StyleSheet, Text, View, Image,TouchableHighlight, TouchableOpacity, Alert} from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, CheckBox, Title, Subtitle, Card, CardItem, H1, H2, H3, Picker, Form,  Item, Label, Input, Item as FormItem } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome.js';
import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';
import I18n from '../language/i18n.js';
import EventEmitter from "react-native-eventemitter";

const language_list = [
  {value: "English", code: "en"},
  {value: "Japanese", code: "ja"},
]

export default class ControlPanel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      language_selected : "English"
    }
  }

  componentWillMount(){
    console.log("Vendor Home Screen!!");
  }

  componentDidMount(){
    EventEmitter.on("language_change", (language)=>{
      console.log("Language Set to Drawer: ", language);
      I18n.locale = language;
      //Actions.replace({key: "drawerMenu"});
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
     //EventEmitter.removeAllListeners("language_change");
   }

  inputOnChange = (language_selected) => {
    console.log("Selected Language: ", language_selected);
    this.setState({language_selected: language_selected});
    //var language_code = "";
    for(item in language_list){
      if(language_list[item].value == language_selected){
        //language_code = language_list[item].code;
        //I18n.locale = language_code;
        EventEmitter.emit("language_change", language_list[item].code);
        break;
      }
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header androidStatusBarColor="rgba(210, 10, 15, 1)" style={styles.navigationBarStyle}>
          <Left>
          </Left>

          <Title style={styles.navHeaderTitle}>{I18n.t("Settings")}</Title>

          <Right>

          </Right>
        </Header>
        <View style={{backgroundColor:'white', paddingTop: 20}}>
          <View style={{flex: 1, flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
            <Icon name='language' size={25} color={'rgba(50, 50, 50, 1)'} />
            <View style={{flex: 8, paddingLeft: 10, marginTop: -20, marginBottom: -15}}>
              <Dropdown
                label={<Text style={{paddingLeft:20, fontWeight: 'bold'}}>{I18n.t('Language')}</Text>}
                data={language_list}
                baseColor="rgba(83, 85, 86, 1)"
                labelFontSize={16}
                style={{fontSize: 12, color: 'black'}}
                value={this.state.language_selected}
                onChangeText={(item) => {this.inputOnChange(item)}}
              />
            </View>
          </View>

          <TouchableOpacity >
            <View style={{flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
              <Icon name='rocket' size={25} color={'rgba(50, 50, 50, 1)'} />
              <Text style={{paddingLeft:10, fontWeight: 'bold'}}>{I18n.t('Version')} v1.0</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
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

// <TouchableOpacity>
//   <View style={{flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
//     <Icon name='language' size={25} color={'rgba(50, 50, 50, 1)'} />
//     <Text style={{paddingLeft:10, fontWeight: 'bold'}}>Language</Text>
//   </View>
// </TouchableOpacity>
// <TouchableOpacity >
//   <View style={{flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
//     <Icon name='info-circle' size={25} color={'rgba(50, 50, 50, 1)'} />
//     <Text style={{paddingLeft:10, fontWeight: 'bold'}}>About Us</Text>
//   </View>
// </TouchableOpacity>
