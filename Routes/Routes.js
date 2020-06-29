import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import OurCity from '../pages/OurCity';
import NavDrawer from '../component/NavDrawer';
import OurGovernment from '../pages/OurGovernment';
import FullDisclosure from '../pages/FullDisclosure';
import Tourism from '../pages/Tourism';
const mainStack = createStackNavigator(
  {
    NavDrawer: NavDrawer,
    Mark: Login,
    Home: Home,
    OurCity: OurCity,
    OurGovernment: OurGovernment,
    FullDisclosure: FullDisclosure,
    Tourism: Tourism
  },
  {
   
    headerStyle: {
      backgroundColor: 'red',
    },
    headerMode: 'none',   
  },
);

const AppContainer = createAppContainer(mainStack);

export default AppContainer;
