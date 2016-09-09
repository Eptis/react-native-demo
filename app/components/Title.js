import React from 'react'
import {Text} from "react-native"
import ClientConfig from '../client_config'

const Title = (props) => (
  <Text style={[style, props.style || {}]}>{props.children}</Text>
)

const style = {
  fontFamily: "lato",
  fontSize: 36,
  fontWeight: "bold",
  marginBottom: 30,
  color: ClientConfig.secondaryColor
}

export default Title
