'use strict';
import  {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage,
    ListView,
    TouchableHighlight
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
                <Header text={this.state.managed_asd} loaded={this.state.loaded}/>
                <View style={styles.body}>
                    <TouchableHighlight underlayColor={"#E8E8E8"} style={dashStyles.activity}>
                        <View>
                            <Text style={dashStyles.buttonText}>Activity log</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={"#E8E8E8"} style={dashStyles.statistics}>
                        <View>
                            <Text style={dashStyles.buttonText}>Statistics</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={"#E8E8E8"} style={dashStyles.routines}>
                        <View>
                            <Text style={dashStyles.buttonText}>Routines</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={"#E8E8E8"} style={dashStyles.reminders}>
                        <View>
                            <Text style={dashStyles.buttonText}>Reminders</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const dashStyles = {
    activity: {
        backgroundColor: '#529ecc',
        alignSelf: 'stretch',
        justifyContent: 'center',
        height: 70
    },
    statistics: {
        backgroundColor: 'orange',
        alignSelf: 'stretch',
        justifyContent: 'center',
        height: 70,
        marginTop: 15
    },
    routines: {
        backgroundColor: 'purple',
        alignSelf: 'stretch',
        justifyContent: 'center',
        height: 70,
        marginTop: 15
    },
    reminders: {
        backgroundColor: 'green',
        alignSelf: 'stretch',
        justifyContent: 'center',
        height: 70,
        marginTop: 15
    },
    buttonText: {
        paddingLeft: 50,
        fontSize: 18,
        color: 'white'
    }
}

AppRegistry.registerComponent('manage_asd', () => manage_asd);