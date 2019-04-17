import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,
TouchableOpacity, StatusBar, Alert } from 'react-native';
import {withNavigation} from 'react-navigation';
import * as firebase from 'firebase';
export default class Loginform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "Email",
      password: "password",
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  };

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }
  submit(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{ }, (error) => Alert.alert(error.message) )
    if (this.state.isAuthenticated){
      ()=> this.props.navigation.navigate('Register')
      Alert.alert('zaregan')
    }
  }
  render() {
    return (
        <View style={styles.container}>
          <StatusBar
            barStyle="dark-content"/>
          <TextInput style={styles.input}
          placeHolder="username or email"
          placeHolderTextColor="white"
          returnKeyType="next"
          keyBoardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(text) => this.setState({email: text})}
          style={styles.input}
          />
          <TextInput style={styles.input}
          placeHolder="password"
          placeHolderTextColor="white"
          secureTextEntry
          returnKeyType="go"
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          onChangeText={(text) => this.setState({password: text})}
          />
          <TouchableOpacity style={styles.buttonContainer}
          onPress={() => this.submit()}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 48,
    backgroundColor: '#ffeaa7',
    marginBottom: 20,
    color: 'white',
    paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: '#ffeaa7',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  }

});
