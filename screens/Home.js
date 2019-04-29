import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements';
const { width } = Dimensions.get('window');
const height = width * 0.8;
export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly
          centerComponent={{ text: 'Главная', style: { color: '#fff', fontWeight: 'bold', } }}
          containerStyle={{
            backgroundColor: '#A52D38',
            justifyContent: 'space-around',
            fontWeight: 'bold',
          }}
        />
        <View style={styles.container}>
          <View style={styles.scrollContainer}>
            <Text style={styles.header}>
              Добро пожаловать в Sprint!
            </Text>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false} >
              {images.map((image, i) => (
                <Image style={styles.image} source={image.source} key={i} />
              ))}
            </ScrollView>
          </View>
            <Text style={styles.center}>
              Делайте заказы прямо сейчас
            </Text>
            <Button
              title="Каталог"
              buttonStyle={{
                backgroundColor: '#A52D38'
              }}
              onPress={()=>this.props.navigation.navigate('Catalog')}
            />
        </View>
      </View>
    );
  }
}

const theme = {
  Button: {
    containerStyle: {
      marginTop: 10
    }
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  header: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  center: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  scrollContainer: {
    height,
  },
  image: {
    alignSelf: 'center',
    align: 'center',
    height: 200,
    width: 300,
    marginRight: 7,
  },
})

const images = [
            {
                source: {
                    uri: 'https://image.freepik.com/free-vector/homemade-bakery-background_52683-7037.jpg',
                },
            },
            {
                source: {
                    uri: 'https://image.freepik.com/free-vector/realistic-seafood-crab-mussels-pattern-background_1268-4764.jpg',
                },
            },
            {
                source: {
                    uri: 'https://image.freepik.com/free-vector/nut-seed-collection-hand-draw-sketch-vector_37445-362.jpg',
                },
            },
            {
                source: {
                    uri: 'https://image.freepik.com/free-vector/horizontal-background-with-vegetables_84091-206.jpg',
                },
            },

        ];