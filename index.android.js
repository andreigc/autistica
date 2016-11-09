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

    componentWillMount() {

        var self = this;
        AsyncStorage.getItem('user_data').then((user_data_json) => {

            let user_data = JSON.parse(user_data_json);
            let component = {component: Signup};

            if (user_data != null) {
                this.setState({component: Login});
                // alert(user_data.refreshToken);
                // app.auth().signInWithCustomToken(user_data.token).then(
                //     function (result) {
                //         self.setState({component: Account});
                //     },
                //     function (error) {
                //         self.setState(component);
                //     }
                // );
            } else {
                this.setState(component);
            }
        });

    }

    render() {
        if (this.state.component) {
            return (
                <Navigator
                    initialRoute={{component: this.state.component}}
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
        } else {
            return (
                <View style={styles.container}>
                    <Header text="Loading" loaded={this.state.loaded}/>
                </View>
            );
        }
	}
        
}

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: '#F5FCFF',
// },
// welcome: {
// fontSize: 20,
// textAlign: 'center',
// margin: 10,
// },
// instructions: {
// textAlign: 'center',
// color: '#333333',
// marginBottom: 5,
// },
// });

AppRegistry.registerComponent('Autistica', () => Autistica);
