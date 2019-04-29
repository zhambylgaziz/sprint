import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class About extends React.Component {
  static navigationOptions = {
    title: 'О приложении',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Add About here!</Text>
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
