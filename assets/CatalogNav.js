import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Catalog from '../screens/Catalog';
import ShopProducts from '../screens/Shop/ShopProducts';
import ShopKids from '../screens/Shop/ShopKids';
import ShopDrinks from '../screens/Shop/ShopDrinks';
import ShopHome from '../screens/Shop/ShopHome';
import ShopZoo from '../screens/Shop/ShopZoo';

const CatatalogNav = createStackNavigator(
	{
		Catalog: Catalog,
		ShopProducts: ShopProducts,
		ShopKids: ShopKids,
		ShopDrinks: ShopDrinks,
		ShopHome: ShopHome,
		ShopZoo: ShopZoo
	},
	{
	    defaultNavigationOptions: {
	      headerStyle: {
	        backgroundColor: '#A52D38',
	      },
	      headerTintColor: '#fff',
	      headerTitleStyle: {
	        fontWeight: 'bold',
	        fontSize: '12px',
	      },
	    },
  	}
)

export default CatatalogNav;