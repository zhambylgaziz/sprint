import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Catalog extends React.Component {
	render(){
		return(
			<View style = { styles.container } >
				<Text style = { styles.center } >
					This is an catalog page 
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