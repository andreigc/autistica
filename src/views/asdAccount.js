'use strict';
import  {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';
import React, { Component } from 'react';

import Button from '../components/button';
import Header from '../components/header';

import Login from './login';

import styles from '../styles/common-styles.js';

import util from '../util/utils.js'

import app from '../config/config.js' 

export default class asd_account extends Component {

  constructor(props){

    super(props);
    this.state = {
      loaded: false,
    }

  }

  componentWillMount(){

    AsyncStorage.getItem('user_data').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      this.setState({
        user: user_data,
        loaded: true
      });
    });

  }

  render(){
    return (
      <View style={styles.container}>
        <Header text="Receiver account" loaded={this.state.loaded} />
        <View style={styles.body}>
        {
          this.state.user &&
            <View style={styles.body}>
              <View style={styles.email_container}>
                <Text style={styles.email_text}>{this.state.user.email}</Text>
              </View>
              <Image
                style={styles.image}
                source={{uri: this.state.user.photoURL}}
              />
              <Button
                  text="Logout"
                 onpress={util.logout.bind(this)}
                  button_styles={styles.primary_button}
                  button_text_styles={styles.primary_button_text} />
            </View>
        }
        </View>
      </View>
    );
  }



}
AppRegistry.registerComponent('asd_account', () => asd_account);