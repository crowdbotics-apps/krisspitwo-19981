import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile97057Navigator from '../features/UserProfile97057/navigator';
import Tutorial97056Navigator from '../features/Tutorial97056/navigator';
import NotificationList97028Navigator from '../features/NotificationList97028/navigator';
import Settings97019Navigator from '../features/Settings97019/navigator';
import UserProfile97017Navigator from '../features/UserProfile97017/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile97057: { screen: UserProfile97057Navigator },
Tutorial97056: { screen: Tutorial97056Navigator },
NotificationList97028: { screen: NotificationList97028Navigator },
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
