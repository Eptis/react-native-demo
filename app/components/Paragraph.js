import React from 'react'
import {Text} from "react-native"
import ClientConfig from '../client_config'

const Paragraph = (props) => (
  <Text style={[style, props.style || {}]}>{props.children}</Text>
)

const style = {
  fontFamily: "lato",
  lineHeight: 24,
  fontSize: 18,
  color: "#ffffff"
}

export default Paragraph
