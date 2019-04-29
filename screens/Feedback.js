import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Feedback extends React.Component {
  static navigationOptions = {
    title: 'Отзыв',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Add Feedback here!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
