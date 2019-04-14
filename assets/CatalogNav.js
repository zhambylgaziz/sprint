import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Catalog from '../screens/Catalog';
import Shop from '../screens/Shop';

const CatatalogNav = createStackNavigator({
	Catalog: Catalog,
	Shop: Shop
})

export default CatatalogNav;