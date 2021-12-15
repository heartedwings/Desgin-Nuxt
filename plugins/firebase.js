import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyDRC6AJuzT-47IIE5p11Bd1h2aXO_T8wMk",
      authDomain: "nuxt-app-b4719.firebaseapp.com",
    //   databaseURL: "nuxt-app-b4719",
      projectId: "nuxt-app-b4719",
      storageBucket: "nuxt-app-b4719.appspot.com",
      messagingSenderId: "356055834437",
      appId: "1:356055834437:web:38810dd95688b37048e82c",
      measurementId: "G-024VLC73VL"
    })
    }

    export default firebase

// const config = {
//   apiKey: 'AIzaSyDRC6AJuzT-47IIE5p11Bd1h2aXO_T8wMk',
//   authDomain: 'nuxt-app-b4719.firebaseapp.com',
//   //   databaseURL: "nuxt-app-b4719",
//   projectId: 'nuxt-app-b4719',
//   storageBucket: 'nuxt-app-b4719.appspot.com',
//   messagingSenderId: '356055834437',
//   appId: '1:356055834437:web:38810dd95688b37048e82c',
//   measurementId: 'G-024VLC73VL',
// }

// if (!firebase.apps.length) {
//   firebase.initializeApp(config)
// }

// export const auth = firebase.auth
// export default firebase