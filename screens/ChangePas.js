import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, Alert, TouchableOpacity } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';

export default class ChangePas extends React.Component {

state = { password2: '', password: '', curpassword:'' , errorMessage: null }
changePassword = () => {
  if(this.state.password2 == this.state.password){
  this.reauthenticate(this.state.curpassword).then(() => {
    var user = firebase.auth().currentUser;
    user.updatePassword(this.state.password).then(() => {
      Alert.alert("Пароль поменяли!");
    }).catch((error) => { console.log(error); });
  }).catch((error) => { console.log(error); });
  }else {
        Alert.alert("Пароли не совпадают!")
          }}
  reauthenticate = (curpassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email, curpassword);
      return user.reauthenticateAndRetrieveDataWithCredential(cred);
  }
render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.cont}>
      <View style={styles.container}>
        <Text>Поменять пароль</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <TextInput
            secureTextEntry
            placeholder="Старый пароль"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={curpassword => this.setState({ curpassword })}
            value={this.state.curpassword}
          />
        <TextInput
          secureTextEntry
          placeholder="Новый пароль"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          placeholder="Ещё раз пароль"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password2 => this.setState({ password2 })}
          value={this.state.password2}
        />
        <View style={styles.bt}>
        <TouchableOpacity style={styles.buttonContainer}
        onPress={this.changePassword}>
          <Text style={styles.buttonText}>Поменять</Text>
        </TouchableOpacity>
        </View>
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
    borderBottomColor: '#A52D38',
    borderBottomWidth: 1,
    marginTop: 10
  },
  buttonContainer:{
    backgroundColor: '#A52D38',
    paddingVertical: 15,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 75,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  }
})
