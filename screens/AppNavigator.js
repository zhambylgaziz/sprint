import { createStackNavigator, createSwitchNavigator,  createAppContainer } from 'react-navigation';
import Login from './Login'
import Register from './Register'
import Feedback from './Feedback'
import About from './About'
import Contact from './Contact'
import PersonalPage from './PersonalPage'
import Settings from './Settings'
//import Settings2 from './Settings2'

export default class App extends React.Component{
  render() {
    return <App/>;
  }
}


const AppNavigator = createStackNavigator({
  Settings: {screen: Settings},
  Login:{screen: Login},
  Register:{screen: Register},
  Feedback:{screen: Feedback},
  About:{screen: About},
  Contact:{screen: Contact},
},
{
  initialRouteName: 'Settings'
}
);

const App = createAppContainer(AppNavigator);
