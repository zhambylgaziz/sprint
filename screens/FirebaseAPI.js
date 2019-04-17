import * as firebase from 'firebase'

export const createUser = (email, password) =>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => this.props.navigation.navigate('Home'))
  .catch((error) => console.log('Error with sign up',error));
}
