'use strict';
import  {
  AppRegistry,
  Text,
  TextInput,
  View,
  Picker,
} from 'react-native';
import React, { Component } from 'react';

import Button from '../components/button';
import Header from '../components/header';

import Login from './login';

import styles from '../styles/common-styles.js';

import app from '../config/config.js' 

export default class signup extends Component {

  constructor(props){
    super(props);

    this.state = {
      loaded: true,
      email: '',
      password: ''
    };
  }

  signup(){

    var self = this;
    this.setState({
      loaded: false
    });

    app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
	
	function (result) {
		   alert('Your account was created!');
		   self.setState({
				email: '',
				password: '',
				loaded: true
			  });
	  }
	  ,
	
    function(error) {
        switch(error.code){

          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert("Error creating user:");
        }
		self.setState({
				email: '',
				password: '',
				loaded: true
			  });

      });
	  
	 


  }

  goToLogin(){
    this.props.navigator.push({
      component: Login
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text="Signup" loaded={this.state.loaded} />
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
            <Picker
                style={styles.picker}
                selectedValue={this.state.type}
                onValueChange={(value) => this.setState({"type":value})}
            >
                <Picker.Item label="Need Help" value="asd" />
                <Picker.Item label="Offer Help"  value="caretaker" />
            </Picker>
          <Button
            text="Register"
            onpress={this.signup.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />

          <Button
            text="Got an Account?"
            onpress={this.goToLogin.bind(this)}
            button_styles={styles.transparent_button}
            button_text_styles={styles.transparent_button_text} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('signup', () => signup);