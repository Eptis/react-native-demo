import {StyleSheet, PixelRatio} from 'react-native'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#387CFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: "lato",
    color: '#ffffff',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontFamily: "lato",
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontFamily: "lato",
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    paddingTop: 3,
    fontFamily: "lato",
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
    fontFamily: "lato",
    color: '#0100FE',
  },
});

export default Styles
