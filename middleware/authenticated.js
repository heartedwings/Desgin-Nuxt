// 全てのページでユーザーのログイン状態をチェックしてログインしていなければ、
// ログインページへ、ログイン済みの場合は、
// ダッシュボードなど特定のページへリダイレクトさせるmiddleware
export default ({ store, route, redirect }) => {

    if (!store.getters.isAuthenticated && route.name !== 'login' && route.name !== 'register') {
        redirect('/login')
    }
    if (store.getters.isAuthenticated && (route.name === 'login' || route.name === 'register')) {
        redirect('/')
    }
}