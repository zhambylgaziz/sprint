import { createStackNavigator, createSwitchNavigator, createAppContainer  } from 'react-navigation';
import React, { Component } from 'react';
import About from './About'
import Contact from './Contact'
import PersonalPage from './PersonalPage'
import ChangePas from './ChangePas'
import Help from './Help'
import Adress from './Adress'
import Podelilsya from './Podelilsya'
export default class Pers extends React.Component {
  render() {
    return (
      <PersNavig2/>
    );
  }
}


const PersNavig = createStackNavigator({
  PersonalPage:{screen: PersonalPage},
  About:{screen: About},
  Contact:{screen: Contact},
  ChangePas:{screen: ChangePas},
  Adress:{screen: Adress},
  Help:{screen: Help},
  Podelilsya:{screen: Podelilsya},
},
{
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
const PersNavig2 = createAppContainer(PersNavig);

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
