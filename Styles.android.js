import {StyleSheet, PixelRatio} from 'react-native'

const Styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontFamily: "lato",
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontFamily: "lato",
    paddingTop: 7,
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#0100FE',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#0100FE',
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
})

export default Styles
