
<template>
  <div class="page">
    <!-- <label>
     <span>
       お名前:
     </span>
     <input
       type="text"
       v-model="user.name"
     >
   </label>
   <label>
     <span>
       email:
     </span>
     <input
       type="text"
       v-model="user.email"
     >
   </label>
   <button
     type="button"
     @click="submit"
   >
     Submit
   </button> -->

    <div>
      <button @click="signInWithGoogle">ログイン</button>
    </div>

    <div>
      <button @click="signOut">ログアウト</button>
    </div>

    <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        {{name}}
      </h1>
      <h2 class="subtitle">
        Nuxt.jsとFirebaseを使って簡単なWebサービスを作るテストです。
      </h2>

      <div class="links">
        <logIn v-if="!isLogin"></logIn>
        <logOut v-if="isLogin" :user="userData"></logOut>
      </div>
    </div>
  </section>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import firebase from '../plugins/firebase'
import logIn from '../components/login.vue';
import logOut from '../components/logout.vue';

export default {
  components: {
    logIn,
    logOut
  },
  asyncData (context) {
    // コンポーネントをロードする前に毎回呼び出されます
    return { name: 'Hello, World！！', isLogin:false, userData:null}
  },
  fetch () {
    // `fetch` メソッドはページの描画前にストアを満たすために使用されます
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      };
    });
  },

  data() {
    return {
      user: {
        name: '',
        email: '',
      },
    }
  },

  head() {
    return {
      title: 'addTodo Page',
    }
  },

  methods: {
    submit() {
      const db = firebase.firestore()
      const dbUsers = db.collection('users')
      dbUsers
        .add({
          name: this.user.name,
          email: this.user.email,
        })
        .then((ref) => {
          console.log('Add ID: ', ref.id)
        })
    },

    googleLogin() {
      // firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    },

    logout() {},
    ...mapActions(['signInWithGoogle', 'signOut']),
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Dancing Script', cursive;
  font-size: 40px;
  color: maroon;
  text-align: center;
  margin-top: 5%;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>