import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

// body

const Header =({title}) => {
	return (
		<View style={styles.container}> 
			<Text> header
      </Text>
		</View>
		)
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 116,
    // paddingTop: 55,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // position: 'relative', 
    // elevation: 2
  },
});
//export
export default Header
