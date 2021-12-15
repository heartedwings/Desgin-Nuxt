<template>
  <section class="container">
    <div>
      <div class="codepen-container">
        <nuxt-link to="/codepen">
          <img class="codeImg" src="../static/img/codepen3.png" />
        </nuxt-link>
        <nuxt-link to="/codepen">
          <img class="codeImg2" src="../static/img/codepen2.jpg" />
        </nuxt-link>
      </div>
      <div class="title">Design parts</div>
      <div class="container">
        <div>
          <design />
        </div>
      </div>


      <div class="title">------- Bulletin board -------</div>

      <div class="pencil">
        <router-link to="/about">
          <img src="../static/img/pencil.png" />
        </router-link>
      </div>

      <div class="memo" v-for="list in $store.state.lists" :key="list.id">
        <!-- <div>{{ getNow() }}</div> -->

        <div class="memoName">Name : {{ list.name }}</div>

        <div class="memoCategory">Gender : {{ list.category }}</div>

        <div class="memoRemarks">Remarks : {{ list.remarks }}</div>

        <div>
          <span
            ><button class="trashBox" @click="editButton()">
              <img class="trashBoxImg" src="../static/img/edit.png" /></button
          ></span>
          <span
            ><button class="trashBox" @click="deleteButton()">
              <img
                class="trashBoxImg"
                src="../static/img/trashBox.png"
              /></button
          ></span>
        </div>
      </div>

      <div class="space"></div>
    </div>
  </section>
</template>


<script>
import { mapActions } from 'vuex'
import design from '../components/Design'

export default {
  components: {
    design,
  },
  data() {
    return {
      item: {
        name: '',
        category: '',
        remarks: '',
      },
    }
  },

  head() {
    return {
      title: 'Home Page',
    }
  },

  methods: {
    // getNow() {
    //   var now = new Date();
    //   var year = now.getFullYear();
    //   var mon = now.getMonth() + 1; //１を足すこと
    //   var day = now.getDate();
    //   var hour = now.getHours();
    //   var min = now.getMinutes();
    //   var sec = now.getSeconds();
    //   var todayNow =
    //     year + "年" +
    //     mon + "月" +
    //     day + "日" +
    //     hour + "時" +
    //     min + "分" +
    //     sec + "秒";
    //   return todayNow;
    // },

    editButton() {},

    deleteButton() {
      if (confirm('消去しますか？')) {
        this.deleteAction()
      }
    },
    ...mapActions(['deleteAction']),
  },
}
</script>


<style>
.title {
  font-family: 'Dancing Script', cursive;
  font-size: 40px;
  color: maroon;
  text-align: center;
  margin-top: 5%;
}
.main {
    text-align: center;
    margin-top: 5%;
}
.memo {
  width: 50%;
  padding: 2%;
  margin-top: 5%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  font-weight: bold;
  color: #d36060;
  background: #fff;
  border: solid 3px #b0493b;
  border-radius: 10px;
}
.trashBox {
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
}
.trashBoxImg {
  width: 50%;
}
.pencil {
  text-align: right;
  margin-right: 20%;
}

.codeImg {
  width: 45%;
  margin-left: 55%;
}
.codeImg2 {
  width: 60.2%;
  margin-right: 55%;
}
.codepen-container {
  display: flex;
  margin-top: 10%;
  width: 80%;
  margin-left: 7.5%;
}
</style>