/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';

import Signup from './pages/Signup';
import Login from './pages/Login';

import Home from './pages/Home';

<<<<<<< HEAD
import { firebase } from './utils/firebase';
=======

import { firebase } from './utils/firebase'
>>>>>>> cfe8d1279a733777a7298919c9dd2bcff588eb0b


import styles from './styles/common-styles';

export default class washApp extends Component {

  render(){
      return (
        <Navigator
        initialRoute={{
            component: Home,
             }}

        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          if(route.component){
            // Pass the navigator the the component so it can navigate as well.
            // Pass firebaseApp so it can make calls to firebase.
            return React.createElement(route.component, { navigator, firebase},{ ...route.passProps });
          }
        }} />
      );
  }
}

AppRegistry.registerComponent('washApp', () => washApp);
