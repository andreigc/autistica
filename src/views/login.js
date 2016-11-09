'use strict';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';
import React, { Component } from 'react';

import Button from '../components/button';
import Header from '../components/header';

import Signup from './signup';
import AsdAccount from './asdAccount';
import CaretakerAccount from './caretakerAccount';

import app from '../config/config.js' 

import styles from '../styles/common-styles.js';

import util from '../util/utils.js';

export default class login extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      loaded: true
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Header text="Login" loaded={this.state.loaded} />
        <View style={styles.body}>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email Address"}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />

          <Button
            text="Login"
            onpress={this.login.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />

          <Button
            text="Don't have an account?"
            onpress={this.goToSignup.bind(this)}
            button_styles={styles.transparent_button}
            button_text_styles={styles.transparent_button_text} />
        </View>
      </View>
    );
  }

  login(){

    this.setState({
      loaded: false
    });
    var self = this;
    app.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(
      function(result) {

          var ref = app.database().ref("autistica/users").child(util.escapeEmailAddress(self.state.email));
          ref.once('value')
            .then(function(data) {
              var type = data.val().type;
              var component = type === 'asd' ? AsdAccount : CaretakerAccount;
              self.setState({
                loaded: true
              });
              AsyncStorage.setItem('user_data', JSON.stringify(result));
              self.props.navigator.push({
                component: component
              });
            });
	  },
	  function(error) {
		  self.setState({
            loaded: true
          });
		  alert('Login Failed. Please try again');
	  }
  );
  }

  goToSignup(){
    this.props.navigator.push({
      component: Signup
    });
  }

}

AppRegistry.registerComponent('login', () => login);