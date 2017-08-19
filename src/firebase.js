import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyC5ayygv4jM79KCBJe--7V7ovaqknoUKkE',
    authDomain: 'musicquiz-d798a.firebaseapp.com',
    databaseURL: 'https://musicquiz-d798a.firebaseio.com',
    projectId: 'musicquiz-d798a',
    storageBucket: 'musicquiz-d798a.appspot.com',
    messagingSenderId: '653981063262'
})

export default firebaseApp
