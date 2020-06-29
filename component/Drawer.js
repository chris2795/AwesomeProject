import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Right,
  Left,
  Body,
  Text,
  Icon,
} from 'native-base';

import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

// const DrawerNavigators = Header({
//   header: {
//     visible: false,
//   },
// });

export default class Drawer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          {/* //when clicked */}
          <TouchableOpacity
            style={{alignItems: 'flex-end', margin: 16}}
            onPress={this.props.navigation.openDrawer}>
            <Icon name="home" />
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.text}>{this.props.name} Screens</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  //style of container
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  //style of text
  text: {
    color: '#16d5f2',
    fontSize: 20,
    fontWeight: '500',
  },
});
