//General Imports
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Tab Nav Import
import MainTabNavigator from './MainTabNavigator';

// Screen Imports
import { loadingScreen } from '../screens/AppLoading';
import { LogInScreen } from '../screens/SplashScreen';
import { SignUpScreen } from '../screens/SignUpScreen';

const LoadNavigator = createStackNavigator(
  {
    Home: {
      screen: loadingScreen,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
)

const StackNavigator = createStackNavigator(
  {
    LogIn: {
      screen: LogInScreen,
      navigationOptions: {
        header: null,
      }
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null,
      }
    }
  }
)

const App = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Load: {
    screen: LoadNavigator,
  },
  Auth: {
    screen: StackNavigator,
  },
  Main: {
    screen: MainTabNavigator,
  }
});

export default createAppContainer(App);
