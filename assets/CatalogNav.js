import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Catalog from '../screens/Catalog';
import Shop from '../screens/Shop';
import ShopProducts from '../screens/ShopProducts';

const CatatalogNav = createStackNavigator({
	Catalog: Catalog,
	Shop: Shop,
	ShopProducts: ShopProducts
})

export default CatatalogNav;