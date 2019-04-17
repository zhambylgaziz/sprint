import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'

class ShopProducts extends React.Component {
	
	keyExtractor = (item, index) => index.toString()

	renderItem = ({ item }) => (
	  <ListItem
	    title={item.name}
	    subtitle={item.subtitle}
	    leftAvatar={{
	      source: item.img,
	      title: item.name
	    }}
	  />
	)

	render () {
	  return (
	    <FlatList
	      keyExtractor={this.keyExtractor}
	      data={list}
	      renderItem={this.renderItem}
	    />
	  )
	}
}
const list = [
  {
    name: 'BonAqua 0,5л',
    img: '../assets/img/voda.jpg',
    subtitle: 'Вода "BonAqua" без газа 0,5л - 110тг'
  },
  {
    name: 'Аксай нан',
    img: '../assets/img/hleb.jpg',
    subtitle: 'Хлеб "Аксай нан" Формовой 1шт - 80тг'
  },
  {
    name: 'Молоко "Простоквашино" 3,2%',
    img: '../assets/img/moloko.jpg',
    subtitle: 'Молоко "Простоквашино" 3,2% 1л - 520тг'
  },
  {
    name: 'Добрый',
    img: '../assets/img/voda.jpg',
    subtitle: 'Сок "Добрый" Яблоко 1л - 110тг'
  },

  {
    name: '"AHMAD" tea Earl Grey',
    img: '../assets/img/voda.jpg',
    subtitle: 'Чай черный "AHMAD" Earl Grey со вкусом и ароматом бергамота, 200гр - 1350тг'
  },
  {
    name: 'Raffaello Конфеты',
    img: '../assets/img/voda.jpg',
    subtitle: 'Конфеты "Raffaello" 150гр - 1600тг'
  } 
]
export default ShopProducts;