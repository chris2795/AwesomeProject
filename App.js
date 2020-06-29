import React, {Component} from 'react';
import Routes from './Routes/Routes';

import {View, StatusBar} from 'react-native';

export default class App extends Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  render() {
    return (
      <>
        
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Routes />
        </>
    );
  }
}
