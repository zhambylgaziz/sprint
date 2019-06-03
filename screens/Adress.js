import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,
TouchableOpacity, StatusBar, Alert } from 'react-native';
import * as firebase from 'firebase';
import axios from 'axios';
const serverUrl = 'http://192.168.1.104:5000';
const http = axios.create({
  baseURL: serverUrl,
});
export default class Adress extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: "Almaty",
      name: "",
      phone: "",
      street: "",
      home: "",
      apart: ""
    };
  }
  submit(){
      const { city, name, phone, street, home, apart } = this.state;
      const username = firebase.auth().currentUser.email;
      if( name == "" || phone == "" || street == "" || home == ""){
        Alert.alert("Заполните все поля: (ФИО, Номер телефона, Улица, Дом)")
      }else{
        http.post('/addAddres', {
          username: username, name: name, phone: phone, street: street, home: home, apart: apart })
        .catch((err) => console.log(err))
      }  
  }
  render() {
    return (
        <View style={styles.container}>
          <StatusBar
            barStyle="dark-content"/>
          <TextInput style={styles.input}
          placeHolder="ФИО"
          placeHolderTextColor="#FFFF31"
          returnKeyType="next"
          keyBoardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(text) => this.setState({name: text})}
          style={styles.input}
          />
          <TextInput style={styles.input}
          placeHolder="Номер телефона"
          placeHolderTextColor="#FFFF31"
          returnKeyType="next"
          keyBoardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(text) => this.setState({phone: text})}
          style={styles.input}
          />
          <TextInput style={styles.input}
          placeHolder="Улица"
          placeHolderTextColor="#FFFF31"
          returnKeyType="next"
          keyBoardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(text) => this.setState({street: text})}
          style={styles.input}
          />
          <TextInput style={styles.input}
          placeHolder="Дом"
          placeHolderTextColor="#FFFF31"
          returnKeyType="next"
          keyBoardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(text) => this.setState({home: text})}
          style={styles.input}
          />
          <TextInput style={styles.input}
          placeHolder="Квартира"
          placeHolderTextColor="#FFFF31"
          returnKeyType="next"
          keyBoardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(text) => this.setState({apart: text})}
          style={styles.input}
          />
          <TouchableOpacity style={styles.buttonContainer}
          onPress={() => this.submit()}>
            <Text style={styles.buttonText}>Добавить</Text>
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
