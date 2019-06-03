import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';

// const serverUrl = 'http://172.20.10.2:5000';
const serverUrl = 'http://192.168.1.106:5000';
const http = axios.create({
  baseURL: serverUrl,
});

class Adresses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }
  // static navigationOptions = {
  //   title: 'Для дома',
  // };
  componentDidMount() {
    get_user()
  }
  get_user(){
    const username = firebase.auth().currentUser.email;
    http.post('/getUser', {username: username})
      .then((response) => this.setState({user: response.data}))
      .catch((err) => console.log(err));  
  }
  delete(address){
    const username = firebase.auth().currentUser.email;
    http.post('/delAddress', {username: username, address: address})
      .then(() => this.loadCart())
      .catch((err) => console.log(err))
    get_user()
  }
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.address}
      subtitle={
        <View style={styles.subtitleView}>
          <Text>{item.name}</Text>
          <Text>{item.phone}</Text>
        </View>
      }
      rightIcon={
        <Icon name="ios-close" color = { 'grey' } size={24} 
          onPress={() => this.delete(item.address)}
          underlayColor = '#ff0000'
        />
      }
         
    />
  )

  render () {
    const { user } = this.state; 
    return (
      <View style={styles.list}>
        <View>
          <FlatList
              keyExtractor={this.keyExtractor}
              data={user.addresses}
              renderItem={this.renderItem}
              extraData={this.state}
              showsHorizontalScrollIndicator={false}
            />
        </View>
        <View>
          <Button 
            title="Добавить Адресс" 
            onPress={} 
            buttonStyle={{
                backgroundColor: '#A52D38'
            }}
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
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },

})
export default Adresses;