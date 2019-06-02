import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, Alert } from 'react-native'
import * as firebase from 'firebase'
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class Register extends React.Component {
static navigationOptions = {
  title: 'Регистрация',
};
state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  get_user(this.state.email);
  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(()=> {}, (error) => {Alert.alert(error.message)} );
}
get_user(username){
  http.post('/getUser', {username: username})
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));  
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
        <Button 
          title="Зарегистрироваться" 
          onPress={this.handleSignUp} 
          buttonStyle={{
              backgroundColor: '#A52D38'
          }}
        />
        <Button
          title="Нет аккаунта? Зарегистрируйся!"
          onPress={() => this.props.navigation.navigate('Login')}
          buttonStyle={{
              backgroundColor: '#A52D38'
            }}
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
