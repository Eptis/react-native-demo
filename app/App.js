import React, { Component } from 'react';
import {
  Text,
  Navigator,
  Image,
  Platform,
  BackAndroid,
  View,
} from 'react-native';

import ClientConfig from './client_config'
import Welcome from './scenes/Welcome'
import PrivacyAgreement from './scenes/PrivacyAgreement'
import UsageType from './scenes/UsageType'
import Shared from './scenes/Shared'
import Done from './scenes/Done'
import ViewContainer from './components/ViewContainer'


var currentIndex = 0
var navigator;


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.scenes = [
      {order: 0, ident: "welcome", component: Welcome},
      {order: 1, ident: "privacyAgreement", component: PrivacyAgreement},
      {order: 2, ident: "usageType", component: UsageType},
      {order: 3, ident: "shared", component: Shared},
      {order: 4, ident: "done", component: Done}
    ].filter((item)=> {
      switch(item.ident){
        case "privacyAgreement":
          return ClientConfig.showPrivacyAgreement
          break;
        case "shared":
          return ClientConfig.showShared
          break;
        case "usageType":
          return ClientConfig.showUsageType
          break;
        default:
          return true
      }
    })

    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', () => {
          if (navigator && navigator.getCurrentRoutes().length > 1) {
              navigator.pop();
              return true;
          }
          return false;
      });
    };
  }

  render() {
    let scenes = this.scenes
    return (
      <ViewContainer>
          <Image
            style={{
              width: 125,
              height: 50,
              marginTop: 15,
              alignSelf: "center",
              resizeMode: "contain"
            }}
            source={require('./client_logo.png')}/>
        <Navigator
          ref={(nav) => { navigator = nav; }}
          initialRoute={scenes[0]}
          renderScene={(route, navigator) => {
            let globalProps = { navigator }
            let routeIndex = scenes.findIndex(r => r.ident === route.ident)
            let Comp = scenes[routeIndex].component

            return <Comp
              nextScene={scenes[routeIndex + 1]}
              {...globalProps}/>
          }}
        />
      </ViewContainer>
    );
  }
}




export default App
