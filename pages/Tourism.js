import React, {Component} from 'react';
import {ToastAndroid} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Item,
  Input,
  Content,
  Text,
} from 'native-base';

import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

import {Col, Row, Grid} from 'react-native-easy-grid';

import {Inset, stackFactory} from 'react-native-spacing-system';

const spacing = {
  sm: 10,
  md: 12,
  lg: 25,
};

const Stack = stackFactory(spacing);

export default class Home extends Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };

  render() {
    return (
      <Container>
        <TouchableOpacity
          style={{alignItems: 'flex-end', margin: 16}}
          onPress={this.props.navigation.openDrawer}>
          <Icon name="menu" />
        </TouchableOpacity>
        <Content>
          <Inset all={spacing.sm}>
            <Button
              onPress={() =>
                ToastAndroid.showWithGravity(
                  'All Your Base Are Belong To Us',
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER,
                )
              }>
              <Text>Go to Home</Text>
            </Button>
          </Inset>
        </Content>
      </Container>
    );
  }
}
