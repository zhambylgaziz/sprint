import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Settings from './Settings';
import Login from './Login'
import Register from './Register'
import Feedback from './Feedback'
import About from './About'
import Home from './Home'
const AppNavigator = createStackNavigator({
  Settings: { screen: Settings },
  Login:{screen: Login},
  Register:{screen: Register},
  Feedback:{screen: Feedback},
  About:{screen: About},
  Home:{screen: Home},
});


export default AppNavigator;
