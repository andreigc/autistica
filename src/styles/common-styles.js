'use strict';
import {
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 9,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinput: {
    height: 40,
	width: 200,
    borderWidth: 0
  },
  transparent_button: {
    marginTop: 10,
    padding: 15
  },
  transparent_button_text: {
    color: '#0485A9',
    fontSize: 16
  },
  primary_button: {
    backgroundColor: '#529ecc',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  primary_button_text: {
    color: '#FFF',
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100
  },
  picker: {
    width: 200,
  },
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  },
  userRow: {
    height: 50
  }
});