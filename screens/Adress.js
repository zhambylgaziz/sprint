import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, Alert,ScrollView, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class Adress extends React.Component {
static navigationOptions = {
  title: 'Адрес',
};

state = {
  address: '',
  street: '',
  city: '',
  apart: '',
  home: '',
  name:'',
  phone: ''
}

  save = () => {

  }

render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.cont} enabled>
      <ScrollView>
      <View style={styles.container}>
        <Text>Добавьте ваш адрес доставки продуктов</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Контактное имя"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          placeholder="Номер телефона"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={phone => this.setState({ phone })}
          value={this.state.phone}
        />
        <TextInput

          placeholder="Город"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={city => this.setState({ city })}
          value={this.state.city}
        />
        <TextInput

          placeholder="Улица"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={street => this.setState({ street })}
          value={this.state.street}
        />
        <TextInput

          placeholder="Дом"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={home => this.setState({ home  })}
          value={this.state.home}
        />
        <TextInput
          placeholder="Квартира"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={apart => this.setState({ apart  })}
          value={this.state.apart}
        />
        <View style={styles.bt}>
        <TouchableOpacity style={styles.buttonContainer}
        onPress={() => this.signOutUser()}>
          <Text style={styles.buttonText}>Сохранить</Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bt: {
    marginTop: 30,
    justifyContent:'flex-end',
    marginBottom: 10,
    flex: 1
  },
  buttonContainer:{
    backgroundColor: '#A52D38',
    paddingVertical: 15,
    paddingHorizontal: 75,
    textAlign: 'center',
    marginBottom: 5
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
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
  }
})
