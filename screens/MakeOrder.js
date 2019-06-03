import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from "native-base";
import axios from 'axios';
import { List, ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';

const serverUrl = 'http://192.168.1.104:5000';
// const serverUrl = 'http://172.20.10.2:5000';
const http = axios.create({
  baseURL: serverUrl,
});
export default class MakeOrder extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      user: "",
      cart_products: [],
      isLoggedIn: false,
      total: 0
    }
    // setInterval(() => (this.loadCart()), 1000);
  }
  
  componentDidMount() {
    get_user()
  }
  checkAuth() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
          this.setState({isLoggedIn: true})
      } else {
          this.setState({isLoggedIn: false})
      }
    });
  }
  get_user(){
    const username = firebase.auth().currentUser.email;
    http.post('/getUser', {username: username})
        .then((response) => this.setState({user: response.data}))
        .catch((err) => console.log(err));  
  }
  loadCart(){
      const username = firebase.auth().currentUser.email;
      if (username != "" ) {
        http.post('/getCart', {username: username})
        .then((response) => this.setState({cart_products: response.data.cart, total: response.data.total}))
        .catch((err) => console.log(err));
      }
  }
  makeOrder(){

  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <View>
      <ListItem
      title={item.name}
      subtitle={
        <View>
          <Text>{item.subtitle}</Text>
          <Text>Количество: {item.quantity}</Text>
        </View>
      }
     leftAvatar={{ source: { uri: item.img } }}
      rightIcon={
        <Icon name="ios-close" color = { 'grey' } size={24} 
          onPress={() => this.deleteProduct(item)}
          underlayColor = '#ff0000'
        />}
      />
    </View>
  )

  render() {
    const { user, cart_products, total } = this.state; 
    return (
            <View style={styles.main}>
              <Header
                statusBarProps={{ barStyle: 'light-content' }}
                barStyle="light-content" // or directly
                leftComponent={
                  <Icon name="ios-cart" color = { '#fff' } size={24} />
                }
                centerComponent={{ text: 'Оплата', style: { color: '#fff', fontWeight: 'bold', } }}
                containerStyle={{
                  backgroundColor: '#A52D38',
                  justifyContent: 'space-around',
                  fontWeight: 'bold',
                }}
              />
              <Card>
                <CardItem header bordered>
                  <Text>NativeBase</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                      NativeBase is a free and open source framework that enable
                      developers to build
                      high-quality mobile apps using React Native iOS and Android
                      apps
                      with a fusion of ES6.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Text>GeekyAnts</Text>
                </CardItem>
              </Card>
              <View style={styles.footer}>
                <View style={styles.half}>
                <TouchableOpacity style={styles.buttonContainer}
                  onPress={() => this.makeOrder()}>
                    <Text style={styles.buttonText}>Оплата</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.half}>
                  <Text>Тотал: {total}</Text>
                </View>
              </View>
            </View>
          );
        
  }
}
const styles = StyleSheet.create({
  main:{
    flex: 1
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  list: {
    paddingVertical: 30
  },
  header: {
    fontSize: 12,
    fontFamily: 'Cochin'
  },
  center: {
    fontSize: 12,
    textAlign: 'center' 
  },
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
    alignItems:'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  half: {
    width: '50%'
  },
  buttonContainer:{
    backgroundColor: '#A52D38',
    paddingVertical: 15,
    width: '100%',
    height: '100%'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  }
})