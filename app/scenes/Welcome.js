import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import ClientConfig from '../client_config'
import NextButton from '../components/NextButton'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.topContent}>
          <Title style={{textAlign: "center"}}> Welcome wakoopa people to my demo </Title>
          <Paragraph style={{alignSelf: "flex-start"}}>
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </ScrollView>
        <NextButton
          style={styles.nextButton}
          text="NEXT"
          onPress={() => this.props.navigator.push(this.props.nextScene)}
          />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: "lato",
    margin: 10,
  },
  nextButton: {
    alignSelf: "stretch",
    textAlign: "center",
    padding: 30,
  }
});

export default Welcome
