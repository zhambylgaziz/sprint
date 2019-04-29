import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image } from 'react-native';
import { List, ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import * as firebase from 'firebase'
 
export default class PersonalPage extends React.Component {
  signOutUser = async () => {
      try {
          await firebase.auth().signOut();
      } catch (e) {
          console.log(e);
      }
  }
 
    render() {
      const username = firebase.auth().currentUser.email;
      return (
        <View>
          <Header
            statusBarProps={{ barStyle: 'light-content' }}
            barStyle="light-content"
            centerComponent={{ text: 'Личный кабинет', style: { color: '#fff', fontWeight: 'bold', } }}
            containerStyle={{
              backgroundColor: '#A52D38',
              justifyContent: 'space-around',
              fontWeight: 'bold',
            }}
            rightComponent={
              <Icon name="ios-power" color = { '#fff' } size={24} 
              onPress={this.signOutUser}
              />
            }
          />
          <View style={styles.container}>
            <Image
              style={{width: 150, height: 150, borderRadius: 75}}
              source={{uri: 'https://image.freepik.com/free-vector/personal-manager-support-stroke-vector-icons_92753-84.jpg'}}
            />
            <Text>{username}</Text>
            <Text>Баланс:</Text>
            {
              list.map((item, i) => (
                <ListItem button onPress ={()=> this.props.navigation.navigate(item.page)}
                  key={i}
                  title={item.name}
                />)
              )
            } 
            </View>
        </View>
      )
    }
  }
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    flex: 1,
    alignItems: 'center'
  },
  image: {
    marginTop: 50
  },
  heading: {
    marginTop: 40
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 10
  }
})

const list = [
    {
      name: 'О нас',
      page: 'About'
    },
    {
      name: 'Отзывы',
      page: 'Feedback'
    },
    {
      name: 'Контакты',
      page: 'Contact'
    },
  ]