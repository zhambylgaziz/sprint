import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,
TouchableOpacity, StatusBar, Alert } from 'react-native';
import * as firebase from 'firebase';
export default class Loginform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // email: "bainur@gas.com",
      // password: "bainur",
      email: "",
      password: "",
    };
  }
  submit(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user)=>{ }, (error) => Alert.alert(error.message))
  }
  render() {
    return (
        <View style={styles.container}>
          <StatusBar
            barStyle="dark-content"/>
          <TextInput style={styles.input}
          placeHolder="username or email"
          placeHolderTextColor="#FFFF31"
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
          placeHolderTextColor="#FFFF31"
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
    backgroundColor: '#A52D38',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  }

});
