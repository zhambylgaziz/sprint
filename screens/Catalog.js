import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'

class Catalog extends React.Component {
	static navigationOptions = {
    	title: 'Каталог',
  	};
	keyExtractor = (item, index) => index.toString()

	renderItem = ({ item }) => (
	  <ListItem
	    title={item.name}
	    leftIcon={
	        <View style={styles.subtitleView}>
	          <Icon name={item.icon} size={24} color="#808080" />
	        </View>
	    }
	    onPress={()=>this.props.navigation.push(item.page)}
	  />
	)

	render () {
	  return (
	    <View style={styles.list}>
		    <FlatList
		      keyExtractor={this.keyExtractor}
		      data={list}
		      renderItem={this.renderItem}
		      showsHorizontalScrollIndicator={false}
		    />
	    </View>
	  )
	}
}

const list = [
	{
		name: 'Продукты',
		icon: 'shoppingcart',
		page: 'ShopProducts'
	},
	{
		name: 'Детям',
		icon: 'hearto',
		page: 'ShopKids'
	},
	{
		name: 'Напитки',
		icon: 'rest',
		page: 'ShopDrinks'
	},
	{
		name: 'Для дома',
		icon: 'home',
		page: 'ShopHome'
	},
	{
		name: 'Зоотовары',
		icon: 'yuque',
		page: 'ShopZoo'
	}

]

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30
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

export default Catalog;