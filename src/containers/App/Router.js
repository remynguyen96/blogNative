import { createStackNavigator } from 'react-navigation';
import { Homepage } from '../Homepage/index';
import { Login } from '../Login/index';

export const RootRouter = createStackNavigator(
  {
    Homepage,
    Login,
  },
  {
    initialRouteName: 'Homepage',
  }
);
