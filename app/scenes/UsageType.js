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

class UsageType extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Title style={{textAlign: "center"}}> For what do you use this device? </Title>
          <View style={{flex: 0, flexDirection: "row", flexWrap: "nowrap", alignItems: "stretch", justifyContent: "space-around"}}>
            <View style={{padding: 50, borderWidth: 1, borderRadius: 24, borderWidth: 4}}>
              <Button style={{textAlign: "center", flex: 1, fontWeight: "bold"}} onPress={() => this.props.navigator.push(this.props.nextScene)} text="Work"/>
            </View>
            <View style={{padding: 50, borderWidth: 1, borderRadius: 24, borderWidth: 4}}>
              <Button style={{textAlign: "center", flex: 1, fontWeight: "bold"}} onPress={() => this.props.navigator.push(this.props.nextScene)} text="Private"/>
            </View>
          </View>
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
export default UsageType
