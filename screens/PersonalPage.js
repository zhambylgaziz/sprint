import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { List, ListItem } from 'react-native-elements';

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
      return (
        <View style={styles.container}>
            <Button title="Выйти" onPress={this.signOutUser} />
        </View>
   )
  }
 }

 const styles = StyleSheet.create({
   container: {
     paddingHorizontal: 30,
     paddingVertical: 30
   }
 })
