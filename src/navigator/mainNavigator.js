import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps102172Navigator from '../features/Maps102172/navigator';
import UserProfile102170Navigator from '../features/UserProfile102170/navigator';
import Settings97019Navigator from '../features/Settings97019/navigator';
import UserProfile97017Navigator from '../features/UserProfile97017/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps102172: { screen: Maps102172Navigator },
UserProfile102170: { screen: UserProfile102170Navigator },
Settings97019: { screen: Settings97019Navigator },
UserProfile97017: { screen: UserProfile97017Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
