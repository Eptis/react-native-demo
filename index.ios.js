/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './app/App'

var currentIndex = 0

class DorriePOC extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (<App />)
  }
}

AppRegistry.registerComponent('DorriePOC', () => DorriePOC);
