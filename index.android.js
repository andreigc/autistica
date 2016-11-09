/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    Navigator
} from 'react-native';


import Signup from './src/views/signup';
import Account from './src/views/account';
import Login from './src/views/login'
import Header from './src/components/header';
import app from './src/config/config.js'
import styles from './src/styles/common-styles.js';

export default class Autistica extends Component {

    constructor(props) {
        super(props);
        this.state = {
            component: null,
            loaded: false
        };
    }

    render() {
            return (
                <Navigator
                    initialRoute={{component: Login}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.FloatFromLeft;
                    }}
                    renderScene={(route, navigator) => {
                        if (route.component) {
                            return React.createElement(route.component, {navigator});
                        }
                    }}
                />
            );
        }

        
}

AppRegistry.registerComponent('Autistica', () => Autistica);
