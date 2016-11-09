'use strict';
import  {
    AsyncStorage
} from 'react-native';
import Login from '../views/login.js'
import app from '../config/config.js'

export default function logout() {

        AsyncStorage.removeItem('user_data').then(() => {
            app.auth().signOut();
            this.props.navigator.push({
                component: Login
            });
        });

}