/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';
import App from './app/App'

class DorriePOC extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (<App/>)
  }
}

AppRegistry.registerComponent('DorriePOC', () => DorriePOC);
