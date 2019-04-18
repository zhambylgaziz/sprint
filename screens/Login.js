import React from 'react';
import { StyleSheet, Text, View,Image, Button, KeyboardAvoidingView } from 'react-native';
import Loginform from './Loginform'
export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            // <Image
            //   style={styles.logo}
            //   source={require('./sprint.png')}
            //   />
            <Text style={styles.title}>Зайдите для покупок</Text>
          </View>
              <View style={styles.formContainer}>
                <Loginform/>
              </View>
            </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 100,
    height: 100
  },
  title:{
    color: 'black',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});
