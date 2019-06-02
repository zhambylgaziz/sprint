import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, Alert,TouchableOpacity, Image } from 'react-native'
import * as firebase from 'firebase'
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class Podelilsya extends React.Component {
static navigationOptions = {
  title: 'Регистрация',
};
state = { email: 'a' }

handleSignUp = () => {
    if (this.state.email == 'a' ){
      Alert.alert("Пустая ссылка, вставьте ссылку!")
    } else{
      this.props.navigation.goBack();
    }
}
render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Ссылка"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          selectTextOnFocus={true}
          onChangeText={(text) => this.setState({email: text})}
        />
        <TouchableOpacity style={styles.buttonContainer}
        onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>Отправить</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
      padding: 20,
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: '700',
      marginTop: 30
    },
    pad: {
      padding:20,
      justifyContent: 'center',
      textAlign: 'center'
    },
    tst: {
      fontWeight:'700',
      fontSize: 25
    },
    textInput: {
      height: 40,
      width: '100%',
      borderBottomColor: '#A52D38',
      borderBottomWidth: 2,
      marginTop: 10,
      marginBottom: 5
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
      paddingVertical: 15,
      marginTop: 10
    },
    buttonContainer2:{
      paddingVertical: 15
    },
    btxt : {
      textAlign: 'center',
      color: '#A52D38',
      fontWeight: '700'
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: '700'
    },
})
