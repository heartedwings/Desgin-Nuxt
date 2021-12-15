import { auth } from '~/plugins/firebase.js'

const initialState = {
  username: '',
  login: false,
  lists: [],
}

// 状態変数を宣言する
export const state = () => (
  initialState
)

// stateを変更する処理を記載する
export const mutations = {
  // 第一引数にstate、第二引数に任意の変数を受け取る
  setUser(state, payload) {
    state.user = payload
  },

  login(state) {
    state.login = !state.login
  },

  addAction(state, item) {
    // console.log('state/lists.name', item)
    state.lists.push(item)
    // console.log(state.lists)
  },

  deleteAction(state, index) {
    state.lists.splice(index, 1)
  },
  //   toggle(state, todo) {
  //     todo.done = !todo.done
  //   },
}

// 処理を記載する （基本的にはここを各vueファイルから触る）
export const actions = {
  // 第一引数にcontext, 第二引数に任意の変数を受け取る
  loginAction({ commit }) {
    commit('login')
  },
  addAction({ commit }, item) {
    console.log('actions/addAction', item)
    commit('addAction', item)
  },
  deleteAction({ commit }, item) {
    console.log('actions/deleteAction', item)
    commit('deleteAction', item)
  },

  signInWithGoogle({ commit }) {
    return auth().signInWithPopup(new auth.GoogleAuthProvider())
  },
  signOut() {
    return auth().signOut()
  },

  googleLogin({ commit }) {
    return auth().signInWithPopup(new auth.GoogleAuthProvider())
  },

  //   nuxtServerInit() {
  //     // 特別な名前のaction
  //     // index.jsのactionにのみ定義でき、アプリケーション起動時に
  //     // 自動で1回実行される
  //     // (SSRモードの場合はサーバーサイドで)
  //     // マスタの取得などに活用
  //   },
}

// getterを宣言する
export const getters = {
  // stateを受け取る
  login: (state) => state.login,
  getItems: (state) => state.lists,

  // user: state => state.user,
  isAuthenticated: state => state.user
}
