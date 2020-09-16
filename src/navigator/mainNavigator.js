import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen87102204Navigator from '../features/BlankScreen87102204/navigator';
import BlankScreen86102203Navigator from '../features/BlankScreen86102203/navigator';
import BlankScreen62102183Navigator from '../features/BlankScreen62102183/navigator';
import BlankScreen61102182Navigator from '../features/BlankScreen61102182/navigator';
import BlankScreen60102181Navigator from '../features/BlankScreen60102181/navigator';
import BlankScreen59102180Navigator from '../features/BlankScreen59102180/navigator';
import SignIn259102179Navigator from '../features/SignIn259102179/navigator';
import Maps102172Navigator from '../features/Maps102172/navigator';
import UserProfile102170Navigator from '../features/UserProfile102170/navigator';
import Settings97019Navigator from '../features/Settings97019/navigator';
import UserProfile97017Navigator from '../features/UserProfile97017/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen87102204: { screen: BlankScreen87102204Navigator },
BlankScreen86102203: { screen: BlankScreen86102203Navigator },
BlankScreen62102183: { screen: BlankScreen62102183Navigator },
BlankScreen61102182: { screen: BlankScreen61102182Navigator },
BlankScreen60102181: { screen: BlankScreen60102181Navigator },
BlankScreen59102180: { screen: BlankScreen59102180Navigator },
SignIn259102179: { screen: SignIn259102179Navigator },
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
