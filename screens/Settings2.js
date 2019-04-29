import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button, ActivityIndicator, StatusBar, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
//import AppNavigator from './AppNavigator';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import * as firebase from 'firebase'
import App from './AppNavigator'
import PersonalPage from './PersonalPage'

export default class Settings2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
          this.setState({isLoggedIn: true})
      } else {
          this.setState({isLoggedIn: false})
      }
    });
  }
  //
  // constructor(props) {
  //     super(props);
  //     this._bootstrapAsync();
  //   }
  //
  //   // Fetch the token from storage then navigate to our appropriate place
  //   _bootstrapAsync = async () => {
  //     const userToken = await AsyncStorage.getItem('userToken');
  //
  //     // This will switch to the App screen or Auth screen and this loading
  //     // screen will be unmounted and thrown away.
  //     this.props.navigation.navigate(userToken ? 'Nav' : 'AppNavigator');
  //   };

    // Render any loading content that you like here
    render() {
        if(this.state.isLoggedIn){
          return <PersonalPage/>;
        } else {
          return <App/> ;
        }
    }
  }











  // constructor(props){
  //   super(props);
  //   this.state = {
  //     isLoggedIn: false,
  //   };
  // }
















//     componentDidMount() {
//       firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//       this.setState({isLoggedIn: true})
//   } else {
//       this.setState({isLoggedIn: false})
//   }
// });
//     }
//     render() {
//   if (this.state.isLoggedIn) {
//     return <PersonalPage/>;
//   } else {
//     return <Settings/>;
//   }
// }
//           // if(this.state.isLoggedIn)
//           //   return <Settings/>;
//           // else
//           //   return <PersonalPage/>;
//   }
//   const styles = StyleSheet.create({
//     container: {
//       paddingHorizontal: 30,
//       paddingVertical: 30
//     },
//     header: {
//       fontSize: 12,
//       fontFamily: 'Cochin'
//     },
//     center: {
//       fontSize: 12,
//       textAlign: 'center'
//     }
//
//   })
