import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import ClientConfig from '../client_config'
import Button from '../components/Button'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'

class Shared extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={{textAlign: "center"}}> Done! </Title>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 0,
    alignItems: 'stretch',
    backgroundColor: ClientConfig.primaryColor,
  },
  topContent: {
    flex: 1
  },
  nextButton: {
    alignSelf: "stretch",
    textAlign: "center",
    padding: 30,
  }
});
export default Shared
