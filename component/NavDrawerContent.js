import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  Text,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  Button,
} from 'react-native-paper';

import {Icon} from 'native-base';

import {
  DrawerContentScrollView,
  DrawerItem,
  useIsDrawerOpen,
} from '@react-navigation/drawer';

export function NavDrawerContent(props) {
  const [isDarkTHeme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTHeme);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* User Content */}
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={require('../assets/crunchy_maki.jpg')}
                size={64
                }
              />
              <View style={{flexDirection: 'column', marginLeft: 15}}>
                <Title style={styles.title}>Chris Velasco</Title>
                <Caption style={styles.caption}>
                  chris.velasco2795@gmail.com
                </Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Button
                  icon={({color, size}) => (
                    <Icon
                      name="edit"
                      type="Feather"
                      style={{fontSize: 22, color: '#3097D1'}}
                      size={size}
                    />
                  )}
                  mode="text"
                  color="#3097D1"
                  onPress={() => console.log('Pressed')}>
                  Edit
                </Button>
              </View>
              <View style={styles.section}>
                <Button
                  icon={({color, size}) => (
                    <Icon
                      name="qrcode-scan"
                      style={{fontSize: 22, color: '#3097D1'}}
                      type="MaterialCommunityIcons"
                      color={color}
                      size={size}
                    />
                  )}
                  mode="text"
                  color="#3097D1"
                  onPress={() => console.log('Pressed')}>
                  Q.R. Code
                </Button>
              </View>
            </View>
          </View>
          {/* End of User Content */}
          {/* Navigation */}
          <Drawer.Section/>
          <Drawer.Section >
      
            <DrawerItem
            
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
            
              label="Our City"
              color="#66d3ed"
              onPress={() => {
                props.navigation.navigate('OurCity');
              }}
            />
            <DrawerItem
            
              label="Our Government"
              onPress={() => {}}
            />
            <DrawerItem
            
              label="Full Discolsure"
              onPress={() => {}}
            />
            <DrawerItem
            
              label="Tourism"
              onPress={() => {}}
            />
          </Drawer.Section>
          {/* Online Services */}
          <Drawer.Section title="Online Services">
            <DrawerItem
            
              // icon={({color, size}) => (
              //   <Icon name="file-document-outline" type="MaterialCommunityIcons" color={color} size={size} />
              // )}
              label="BPLO Online"
              onPress={() => {}}
            />
            <DrawerItem
              // icon={({color, size}) => (
              //   <Icon name="file-document-outline" type="MaterialCommunityIcons" color={color} size={size} />
              // )}
              label="RPT Online"
            
              onPress={() => {}}
            />
          </Drawer.Section>
          {/* End Online Services */}

          {/* Preferences */}
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTHeme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
          <Drawer.Section >
        <DrawerItem
          // icon={({color, size}) => (
          //   <Icon name="sign-out" type="Octicons" color={color} size={size} />
          // )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
          {/* End of Preferences */}

          {/* End of Navigation */}
        </View>
      </DrawerContentScrollView>
      {/* <Drawer.Section >
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="sign-out" type="Octicons" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section> */}
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop:30,
  
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    backgroundColor: '#f2f7f7',
    marginTop: 15,
  },
  bg: {
    backgroundColor: '#f2f7f7',
 
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
