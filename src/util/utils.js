'use strict';
import  {
    AsyncStorage
} from 'react-native';
import Login from '../views/login.js'
import app from '../config/config.js'

export default class util {

     static logout()  {
          AsyncStorage.removeItem('user_data').then(() => {
              app.auth().signOut();
              this.props.navigator.push({
                  component: Login
              });
          });
      }

    static escapeEmailAddress(email) {
        if (!email) return false;
        email = email.toLowerCase();
        email = email.replace(/\./g, ',');
        return email;
    }


}