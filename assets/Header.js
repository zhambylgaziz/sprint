import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

// body

const Header =({title}) => {
	return (
		<View style={styles.container}> 
			<Text> Бул жерде Хидер болсын, 1 файл барлык жака косаберсек жаксы болады озимизге. 
            Бул деген глупый компонент екен, ол ештенке истемейды. Типа, void, мен солай тусиндим, бирак жонди окымадым, шынымды айтсам.
            сагат уже 0:59 болыпты мен уйыктауга кеттим. Уйстип, уйстип, маусымга дейн битирермиз сиккен сабакты.
      </Text>
		</View>
		)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//export
export default Header
