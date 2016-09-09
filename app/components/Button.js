import React from 'react'
import {
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity
} from 'react-native'
import ClientConfig from '../client_config'

const Button = props => (
  <TouchableOpacity>
    <Text onPress={props.onPress} style={[styles.button, props.style || {}]}>{props.text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    fontWeight: "bold",
    color: ClientConfig.secondaryColor
  },
})

export default Button
