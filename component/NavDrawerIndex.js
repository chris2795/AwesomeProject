import React from 'react';
import Drawer from './Drawer';
import Homes from '../pages/Home';
import OurCity from '../pages/OurCity';
import OurGovernment from '../pages/OurGovernment';
import FullDisclosure from '../pages/FullDisclosure';
import Tourism from '../pages/Tourism';



//sir chris dito kana mag seset ng mga pages
export const HomeScreen = ({navigation}) => (
  <Homes navigation={navigation} name="Home" />
);

export const OurCityScreen = ({navigation}) => (
  <OurCity navigation={navigation} name="OurCity" />
);

export const OurGovernmentScreen = ({navigation}) => (
  <OurGovernment navigation={navigation} name="OurGovernment" />
);

export const FullDisclosureScreen = ({navigation}) => (
  <FullDisclosure navigation={navigation} name="FullDisclosure" />
);

export const TourismScreen = ({navigation}) => (
  <Tourism navigation={navigation} name="Tourism" />
);

// export const SignOutScreen = ({navigation}) => (
//   <Drawer navigation={navigation} name="SignOut" />
// );
