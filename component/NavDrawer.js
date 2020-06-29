import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';
import OurCity from '../pages/OurCity';
import {NavDrawerContent} from '../component/NavDrawerContent';

const Drawer = createDrawerNavigator();

export default function NavDrawer() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <NavDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="OurCity" component={OurCity} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
