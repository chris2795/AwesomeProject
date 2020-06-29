import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Right,
  Left,
  Body,

  Icon,
} from 'native-base';

import {DrawerNavigationItems, DrawerNavigatorItems} from 'react-navigation-drawer';

// export default Sideheader = props => (
//   <ScrollView>
//     <ImageBackground
//       soruce={require('../assets/bg_header.jpg')}
//       style={{width: undefined, padding: 16, paddingTop: 48}}>
//       <Icon name="cloud" />
//     </ImageBackground>
//   </ScrollView>
// );

export default (Sideheader = props => (
  <ScrollView>
    <ImageBackground
      source={require('../assets/bg_header.jpg')}
      style={{width: undefined, padding: 16, paddingTop: 20, height: 200}}>
      <Image
        source={require('../assets/crunchy_maki.jpg')}
        style={styles.profile}
      />
      <Text style={styles.name}> Chris Velasco </Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.email}>chris.velasco2795@gmail.com</Text>
    
      </View>
    </ImageBackground>


    <View style={styles.container}>
      <DrawerNavigatorItems {...props}/>
    </View>
  </ScrollView>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  name: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 8,
  },
  email: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 13,
    marginRight: 4
  },
});
