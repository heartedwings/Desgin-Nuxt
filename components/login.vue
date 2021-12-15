<template>
  <button @click="googleLogin">googleでログイン</button>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  methods: {
    googleLogin() {
      firebase
      .auth()
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    },
  },
}
</script>