<template>

<div>
    <div>
      Name
      <div>
        <input name="name" v-model="item.name" placeholder="Please enter your Name" />
      </div>
    </div>

    <div>
      Category
      <div>
        <select name="category" v-model="item.category">
          <option value="" disabled selected>Please select your gender</option>
          <option value="女性">女性</option>
          <option value="男性">男性</option>
        </select>
      </div>
    </div>

    <div>
      Remarks
      <div>
        <textarea name="Remarks" cols="25" rows="5" v-model="item.remarks" />
      </div>
    </div>

    <div class="add-button">
    <span @click="addTodo()">
      <img class="pencil2" src="../static/img/pencil2.png"/>
    </span>
    <span>&nbsp;&nbsp;
      <router-link to="/"><img src="../static/img/cancel.png"/></router-link>
    </span>
    </div>

</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
    return {
        item: {
          name: '',
          category: '',
          remarks: '',
      }
    };
  },
  computed: {
      ...mapGetters (['getItems'])
    // todos() {
    //   return this.$store.state.list
    // }
  },
  methods: {
      ...mapActions({
      addTodoItem: '/add',
      deleteItem: '/delete'
    }),

      addTodo() {
      console.log('投稿したよ');
      console.dir(this)
      let add = '';
            if (this.item.name === '') { add += ' 名前 ' }
            if (this.item.category === '') { add += ' 項目 ' }
            if (this.item.remarks === '') { add += ' 内容 ' }
            if ( add === '') {
              console.log(this.item);
                this.addAction(this.item);
                // this.$store.commit('/addAction', this.item)
              console.log(this.item);
                this.$router.push({ name:"index" });
            } else {
                alert ( `${add}が足らないよ！` )
            }
      },
      ...mapActions(["addAction"]),

//     addTodo(e) {
//       this.$store.commit('add', e.target.value)
//       e.target.value = ''
//     },
//     ...mapMutations({
//       remove: 'remove',
//       toggle: 'toggle'
//     })
  }
}
</script>


<style>
.li {
  list-style-type: none;
}
.done {
  text-decoration: line-through;
}
.todo-form {
  padding: 10px;
  font-size: 1.3em;
  font-family: Arial, sans-serif;
  color: #aaa;
  margin: 0 0 20px;
  width: 300px;
}
.remove-btn {
  margin-left: 20px;
}
.add-button {
  margin-top: 2%;
}
</style>




<!-- 
<template>
  <div>
    <div>投稿フォーム</div>

    <div>
      Name
      <div>
        <select name="name" v-model="item.name">
          <option value="" disabled selected>Please select a Name</option>
          <option value="ゆうた">ゆうた</option>
          <option value="ちひろ">ちひろ</option>
        </select>
      </div>
    </div>

    <div>
      Category
      <div>
        <select name="category" v-model="item.category">
          <option value="" disabled selected>Please select a category</option>
          <option value="足らないもの">足らないもの</option>
          <option value="ストックが欲しいもの">ストックが欲しいもの</option>
          <option value="買ったよ！">買ったよ！</option>
        </select>
      </div>
    </div>

    <div>
      Remarks
      <div>
        <textarea name="Remarks" cols="25" rows="5" v-model="item.remarks" />
      </div>
    </div>

    <span @click="posting()">
      <img class="pencil" src="../assets/img/pencil2.png"/>
    </span>
    <span>&nbsp;&nbsp;<router-link to="/home"><img src="../assets/img/cancel.png"/></router-link></span>


  </div>

  
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import axios from 'axios';
export default {
  data() {
    return {
        item: {
          name: '',
          category: '',
          remarks: '',
      }
    };
  },
  methods: {
    posting() {
      console.log('投稿したよ');
      console.dir(this)
      let add = '';
            if (this.item.name === '') { add += ' 名前 ' }
            if (this.item.category === '') { add += ' 項目 ' }
            if (this.item.remarks === '') { add += ' 内容 ' }
            if ( add === '') {
              console.log("bbb");
              console.log(this.item);
                this.addAction(this.item);
              console.log(this.item);
                this.$router.push({ name:"Home" });
            } else {
                alert ( `${add}が足らないよ！` )
            }
    //   //第一引数：サーバーのURL, 第二引数：データの内容, 第三引数：オプション（任意）
    //   axios
    //   //https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/cities/LA の
    //   //『 YOUR_PROJECT_ID 』をfirebaseの自分のプロジェクトIDに置き換える
    //   //URL末尾のcities/LAを任意のコレクション名（データを格納する場所の名前）にします。
    //     .post(
    //       "https://firestore.googleapis.com/v1/projects/shopping-list-ce603/databases/(default)/documents/posts",
    //       {
    //         formData: {
    //           name: {
    //             stringValue: this.name,
    //           },
    //           category: {
    //             stringValue: this.category,
    //           },
    //           remarks: {
    //             stringValue: this.remarks,
    //           },
    //         },
    //       }
    //     )
    //     //通信が成功したときの処理
    //     .then(() => {
    //       this.name = '';
    //       this.category = '';
    //       this.remarks = '';
    //     });
    
    },
    ...mapActions(["addAction"]),
  },
  computed: {
    ...mapGetters(["getItems"])
  }
};
</script>

<style>
.pencil {
  cursor:pointer
}
</style> -->