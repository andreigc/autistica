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

export default class account extends Component {

    constructor(props) {

        super(props);
        this.state = {
            loaded: false,
        }

    }

    componentWillMount() {

        AsyncStorage.getItem('user_data').then((user_data_json) => {
            let user_data = JSON.parse(user_data_json);
            this.setState({
                user: user_data,
                loaded: true
            });
        });
        AsyncStorage.getItem('user_details').then((user_details_json) => {
            let user_details = JSON.parse(user_details_json);
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                userDetails: user_details,
                dataSource: ds.cloneWithRows(user_details.asdList),
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Header text="Caretaker Account" loaded={this.state.loaded}/>
                <View style={styles.body}>
                    {
                        this.state.user && this.state.userDetails &&
                        <View style={styles.body}>
                            {/*<View style={styles.email_container}>*/}
                                {/*<Text style={styles.email_text}>{this.state.user.email}</Text>*/}
                            {/*</View>*/}
                            <Image
                                style={styles.image}
                                source={{uri: this.state.user.photoURL}}
                            />

                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) => <Text style={styles.userRow}>{rowData}</Text>}
                            />
                            <Button
                                text="Logout"
                                onpress={util.logout.bind(this)}
                                button_styles={styles.primary_button}
                                button_text_styles={styles.primary_button_text}/>
                        </View>
                    }

                </View>
            </View>
        );
    }
}