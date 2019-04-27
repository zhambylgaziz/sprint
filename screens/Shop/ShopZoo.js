import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
// const serverUrl = 'http://172.20.10.2:5000';
const serverUrl = 'http://192.168.1.105:5000';
const http = axios.create({
  baseURL: serverUrl,
});

class ShopZoo extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      products: [],
      category: "zoo",
    };
  }
  static navigationOptions = {
    title: 'Зоотовары',
  };
  componentWillMount(){
    this.loadData();
  }

  loadData(){
    const { category } = this.state;
    http.get('/getZoo')
        .then((response) => this.setState({products: response.data}))
        .catch((err) => console.log(err));
  }
  addToCart(item){
    const { username, category } = this.state;
    http.post('/addToCart', {id: item.id, username: 'user', category: item.category})
      .then(() => console.log("done"))
      .catch((err) => console.log(err))
  }
	keyExtractor = (item, index) => index.toString()

	renderItem = ({ item }) => (
	  <ListItem
	    title={item.name}
	    subtitle={item.subtitle}
	    leftAvatar={{ source: item.img }}
      rightIcon={
        <Icon name="ios-add-circle-outline" color = { 'grey' } size={24} 
          onPress={() => this.addToCart(item)}
          underlayColor = '#ff0000'
        />}
      
	  />
	)

	render () {
    const { products, isLoggedIn } = this.state; 
	  return (
      <View>
	      <View style={styles.list}>
          <FlatList
              keyExtractor={this.keyExtractor}
              data={products}
              renderItem={this.renderItem}
              extraData={this.state}
              showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
	  )
	}
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  list: {
    paddingVertical: 20
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
export default ShopZoo;