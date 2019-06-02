import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';


export default class Help extends React.Component {
  static navigationOptions = {
      title: 'Помощь',
    };
    render() {
      return(
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.container}>
          Добрый день, в этом разделе помощи вы можете найти ответы на часто задаваемые вопросы.
          </Text>
          <Text style={styles.quest}>Как мне заказать продукты? </Text>
          <Text style={styles.ans}>Ответ: Перейдите во вкладку "Каталог", найдите интересующие вас продукты добавьте их в корзину. Далее в корзине подтвердите ваш заказ, добавьте адрес
             куда вам привезти продукты. Ждите, наши курьеры уже в пути.
          </Text>
          <Text style={styles.quest}>Как мне оплатить? </Text>
          <Text style={styles.ans}>Ответ: Вы можете оплатить курьеру наличными когда он выполнит ваш заказ и вы удостоверетесь в пригодности ваших продуктов.
          </Text>
          <Text style={styles.quest}>Как это работает? </Text>
          <Text style={styles.ans}>Ответ: Вы заказываете продукты для дома мы вам их привозим.
          </Text>
        </View>
        </ScrollView>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      fontSize: 20
    },
    quest:{
      fontSize: 20,
      fontFamily: 'AppleSDGothicNeo-Bold'
    },
    ans: {
      fontSize: 15,
      fontFamily: 'AvenirNext-Regular'
    }
  })
