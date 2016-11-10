'use strict';
import  {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage,
    ListView
} from 'react-native';
import React, {Component} from 'react';

import Button from '../components/button';
import Header from '../components/header';

import Login from './login';

import styles from '../styles/common-styles.js';

import util from '../util/utils.js'

import app from '../config/config.js'


export default class manage_asd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('current_managed_asd').then((managed_asd) => {
            this.setState({
                managed_asd: managed_asd,
                loaded: true
            })
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Header  text={this.state.managed_asd} loaded={this.state.loaded}/>
                <View style={styles.body}>
                </View>
            </View>
        );
    }
}
AppRegistry.registerComponent('manage_asd', () => manage_asd);