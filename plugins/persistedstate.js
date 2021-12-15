import createPersistedState from "vuex-persistedstate";

//   // `createPersistedState()`でインスタンス作成。引数に設定を書く
//   export const plugins = [createPersistedState(
//     { // ストレージのキーを指定。デフォルトではvuex
//       key:
//       'TodoAPP',
//       // 'anyGreatApp',

//       // 管理対象のステートを指定。pathsを書かない時は`modules`に書いたモジュールに含まれるステート全て。`[]`の時はどれも保存されない
//       // pathsは保存したいstateを指定
//       paths: [
//         'items'
//         // 'auth.isLoggedIn',
//         // 'master.dataSelected'
//       ],

//       // ストレージの種類を指定する。デフォルトではローカルストレージ
//       // storage: window.sessionStorage
//       storage: window.localStrage
//     }
//   )]

export default ({store, isHMR}) => {
    // In case of HMR, mutation occurs before nuxReady, so previously saved state
    // gets replaced with original state received from server. So, we've to skip HMR.
    // Also nuxtReady event fires for HMR as well, which results multiple registration of
    // vuex-persistedstate plugin
    if (isHMR) return;
  
    if (process.client) {
      window.onNuxtReady((nuxt) => {
        createPersistedState()(store); // vuex plugins can be connected to store, even after creation
      });
    }
  };