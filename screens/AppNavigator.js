import { createStackNavigator, createSwitchNavigator, createAppContainer  } from 'react-navigation';
import React, { Component } from 'react';
import Login from './Login'
import Register from './Register'
import Feedback from './Feedback'
import About from './About'
import Contact from './Contact'
import PersonalPage from './PersonalPage'
import Settings from './Settings'
//import Settings2 from './Settings2'

export default class App extends React.Component {
  render() {
    return (
      <App2/>
    );
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
  initialRouteName: 'Settings',
  defaultNavigationOptions: {
	      headerStyle: {
	        backgroundColor: '#A52D38',
	      },
	      headerTintColor: '#fff',
	      headerTitleStyle: {
	        fontWeight: 'bold',
	        fontSize: '12px',
	      },
	    },
	}
);

const App2 = createAppContainer(AppNavigator);
//
// const Nav = createStackNavigator({
//   PersonalPage: {screen: PersonalPage},
// })
//
// const Settings3 = createStackNavigator({
//   Settings2: {screen: Settings2},
// })
//
// const App = createSwitchNavigator({
//   Settings3: Settings3,
//   AppNavigator: AppNavigator,
//   Nav: Nav,
// },
// {
//   initialRouteName: 'Settings3'
// }
// )

// export default App;
