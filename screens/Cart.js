import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
// var user = firebase.auth().currentUser;
const serverUrl = 'http://192.168.1.105:5000';
// const serverUrl = 'http://172.20.10.2:5000';
const http = axios.create({
  baseURL: serverUrl,
});
export default class Cart extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      cart_products: [],
      isLoggedIn: false
    }
  }
  static navigationOptions = {
    title: 'Корзина',
  };
  componentWillMount(){
    this.loadCart();
  }
  loadCart(){
    http.post('/getCart', {username: 'user'})
        .then((response) => this.setState({cart_products: response.data}))
        .catch((err) => console.log(err));
  }
  deleteProduct(item){
    this.loadCart();
    // const { username } = this.state;
    const id = item.id;
    http.post('/deleteProduct', {id, username: 'user'})
      .then(() => this.loadCart())
      .catch((err) => console.log(err))
  }
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <View>
      <ListItem
      title={item.name}
      subtitle={
        <View>
          <Text>{item.subtitle}</Text>
          <Text>{item.quantity}</Text>
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
    
    const { cart_products, isLoggedIn } = this.state; 
    return (
      <View>
        <View style={styles.list}>
          <FlatList
              keyExtractor={this.keyExtractor}
              data={cart_products}
              renderItem={this.renderItem}
              extraData={this.state}
            />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
  }

})