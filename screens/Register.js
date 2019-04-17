import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, Alert } from 'react-native'
import * as firebase from 'firebase'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator'
export default class Register extends React.Component {
  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(()=> {
      () => this.props.navigator.goBack() //('Settings')
  }, (error) => {Alert.alert(error.message)} );
}
render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.cont}>
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cont: {
    flex: 1,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
