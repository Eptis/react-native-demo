import React from 'react'
import {
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity
} from 'react-native'
import ClientConfig from '../client_config'
import Button from './Button'

const NextButton = props => (
  <View>
    <View style={styles.border}/>
    <Button
      onPress={props.onPress}
      style={styles.button}
      text={props.text}/>
  </View>
)

const styles = StyleSheet.create({
  border: {
    borderTopWidth: 3,
    borderTopColor: ClientConfig.secondaryColor,
  },
  button: {
    textAlign: "center",
    padding: 15,
    flex: 1
  }
})

export default NextButton
