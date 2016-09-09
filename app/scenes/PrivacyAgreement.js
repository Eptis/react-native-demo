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

class PrivacyAgreement extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.topContent}>
          <Title style={{textAlign: "center"}}> Privacy Agreement </Title>
          <View style={{flex: 1, flexDirection: "row", marginBottom: 30, flexWrap: "nowrap", alignItems: "flex-start"}}>
            <Text style={{marginRight: 15, width: 24, fontSize: 24}}>1.</Text>
            <Text style={{flex: 1, color: "#fff"}}>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: "row", flexWrap: "nowrap"}}>
            <Text style={{marginRight: 15, width: 24, marginBottom: 30, fontSize: 24}}>2.</Text>
            <Text style={{flex: 1, color: "#fff"}}>
              Donec sed odio dui.
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: "row", flexWrap: "nowrap"}}>
            <Text style={{marginRight: 15, width: 24, marginBottom: 30, fontSize: 24}}>3.</Text>
            <Text style={{flex: 1, color: "#fff"}}>
              Cras mattis consectetur purus sit amet fermentum.
            </Text>
          </View>

        </ScrollView>
        <NextButton
          style={styles.nextButton}
          text="YES"
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
  nextButton: {
    alignSelf: "stretch",
    textAlign: "center",
    padding: 30,
  }
});

export default PrivacyAgreement
