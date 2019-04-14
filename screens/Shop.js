import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Shop extends React.Component {
  render() {
    return (
      <View style = { styles.container }>
        <Text style = { styles.center }>
          This is Shop
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
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