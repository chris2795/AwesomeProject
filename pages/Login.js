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

import {Col, Row, Grid} from 'react-native-easy-grid';

import {Inset, stackFactory} from 'react-native-spacing-system';

const spacing = {
  sm: 10,
  md: 12,
  lg: 25,
};

const Stack = stackFactory(spacing);

export default class Login extends Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };

  render() {
    return (
      <Container>
        <Grid>
          <Row>
            <Content>
              <Inset all={spacing.sm}>
                <Button
                  full
                  rounded
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Text>Go to Home</Text>
                  <Button
                    full
                    rounded
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>Go to Home</Text>
                  </Button>
                </Button>
              </Inset>
            </Content>
          </Row>
          <Row style={{backgroundColor: 'green'}} />
        </Grid>
      </Container>
    );
  }
}
