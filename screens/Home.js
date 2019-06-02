import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements';
const { width } = Dimensions.get('window');
const height = width * 0.8;
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      category: "drinks",
      isLoggedIn: false,
    };
  }
  addToCart(item){}
  render() {
    return (
      <ScrollView>
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
        <Text style={styles.header}> Популярные товары </Text>
        <View style={styles.container}>
          <View style={styles.scrollContainer}>
            <Text style={styles.header}>
              Vitamin C Drink
            </Text>
            {cdri.map((cdri) => (
              <Image style={styles.image} source={cdri.cvit} />
            ))}
          </View>
            <Text style={styles.center}>
              Напиток газированный Vitamin C Drink   229 тг
            </Text>
            <Button
              title="Добавить в корзину"
              buttonStyle={{
                backgroundColor: '#A52D38'
              }}
              onPress={()=>this.addToCart(item)}
            />
        </View>
        <View style={styles.container}>
          <View style={styles.scrollContainer}>
            <Text style={styles.header}>
              DIZZY Fest Berry
            </Text>
              {cdri.map((cdri) => (
                <Image style={styles.image} source={cdri.diz} />
              ))}

          </View>
            <Text style={styles.center}>
              Лимонад 'DIZZY' Fest Berry, 1л          200тг
            </Text>
            <Button
              title="Добавить в корзину"
              buttonStyle={{
                backgroundColor: '#A52D38'
              }}
              onPress={()=>this.addToCart(item)}
            />
        </View>
        <View style={styles.container}>
          <View style={styles.scrollContainer}>
            <Text style={styles.header}>
              Coca-Cola 0.25л
            </Text>
            {cdri.map((cdri) => (
              <Image style={styles.image} source={cdri.coca} />
            ))}
          </View>
            <Text style={styles.center}>
              Coca-Cola ж/б, 0.25л                    250тг
            </Text>
            <Button
              title="Добавить в корзину"
              buttonStyle={{
                backgroundColor: '#A52D38'
              }}
              onPress={()=>this.addToCart(item)}
            />
        </View>
        <View style={styles.container}>
          <View style={styles.scrollContainer}>
            <Text style={styles.header}>
              Lipton Лимон, 0.5л
            </Text>
              {cdri.map((cdri) => (
                <Image style={styles.image} source={cdri.chai} />
              ))}

          </View>
            <Text style={styles.center}>
              Напиток чайный 'Lipton' Лимон, 0.5л     180тг
            </Text>
            <Button
              title="Добавить в корзину"
              buttonStyle={{
                backgroundColor: '#A52D38'
              }}
              onPress={()=>this.addToCart(item)}
            />
        </View>
        <View style={styles.container}>
          <View style={styles.scrollContainer}>
            <Text style={styles.header}>
              Sprite 0,5л
            </Text>
              {cdri.map((cdri) => (
                <Image style={styles.image} source={cdri.sprt} />
              ))}

          </View>
            <Text style={styles.center}>
              Sprite 0,5л                             180тг
            </Text>
            <Button
              title="Добавить в корзину"
              buttonStyle={{
                backgroundColor: '#A52D38'
              }}
              onPress={()=>this.addToCart(item)}
            />
        </View>
      </View>
      </ScrollView>
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
    //align: 'center',
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
const cdri = [
  {
    cvit: {
      uri: 'https://arbuz.kz/image/s/204696-39-napitok_gazirovannyi_ru.jpg',
    },
    diz: {
      uri: 'https://arbuz.kz/image/s/193933-39-limonad_fest_berry_0_ru.jpg',
    },
    coca: {
      uri: 'https://arbuz.kz/image/s/208123-39-coca-cola_zh_b_0_25l_ru.jpg',
    },
    chai: {
      uri: 'https://arbuz.kz/image/s/204885-39-napitok_chainyi_lipt_ru.jpg',
    },
    sprt: {
      uri: 'https://arbuz.kz/image/s/196766-39-sprite_0_5l_ru.jpg',
    },
  }
];
