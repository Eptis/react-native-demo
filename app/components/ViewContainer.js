import React from 'react'
import {View, StyleSheet, Platform} from 'react-native'
import ClientConfig from '../client_config'

const ViewContainer = props => (
  <View style={styles.viewContainer}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: ClientConfig.primaryColor,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      }
    }),
    justifyContent: "flex-start",
    flex: 1
  },
})

export default ViewContainer
