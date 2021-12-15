<template>
  <div>
    <div class="codepen-framework">
      <p
        class="codepen"
        data-width="80"
        data-height="300"
        data-default-tab="html,result"
        data-slug-hash="JjyaXqJ"
        data-preview="true"
        data-user="heartedwings"
      ></p>
    </div>
    <div class="codepen-framework">
      <p
        class="codepen"
        data-width="80"
        data-height="300"
        data-default-tab="html,result"
        data-slug-hash="jOLeJPR"
        data-preview="true"
        data-user="heartedwings"
      ></p>
    </div>

    <div>
      <p id="exscript">
        <ins class="banner"></ins>
      </p>
    </div>

    <div class="container">
      <!-- 1-0 シール柄 -->
      <div class="dot-margin">
        ドット Ver.0
        <div class="dotBox dot0"></div>
      </div>
      <!-- 1-1 シール柄 -->
      <div class="dot-margin">
        ドット Ver.1
        <div class="dotBox dot"></div>
      </div>
      <!-- 1-2 シール柄 -->
      <div class="dot-margin">
        ドット Ver.2
        <div class="dotBox dot2"></div>
      </div>
      <!-- 1-3 シール柄 -->
      <div class="dot-margin">
        ドット Ver.3
        <div class="dotBox dot3"></div>
      </div>
      <!-- 1-4 シール柄 -->
      <div class="dot-margin">
        ドット Ver.4
        <div class="dotBox dot4"></div>
      </div>
    </div>

    <div class="container">
      <!-- 1-0 ボーダー -->
      <div class="border-margin">
        ボーダー Ver.0
        <div class="borderBox border0"></div>
      </div>
      <!-- 1-1 シール柄 -->
      <div class="border-margin">
        ボーダー Ver.1
        <div class="borderBox border"></div>
      </div>
      <!-- 1-2 シール柄 -->
      <div class="border-margin">
        ボーダー Ver.2
        <div class="borderBox border2"></div>
      </div>
      <!-- 1-3 シール柄 -->
      <div class="border-margin">
        ボーダー Ver.3
        <div class="borderBox border3"></div>
      </div>
      <!-- 1-4 シール柄 -->
      <div class="border-margin">
        ボーダー Ver.4
        <div class="borderBox border4"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  mounted() {
    const scriptEl = document.createElement('script')
    scriptEl.setAttribute(
      'src',
      'https://cpwebassets.codepen.io/assets/embed/ei.js'
    )
    document.getElementById('exscript').appendChild(scriptEl)
  },

  // methods: {
  // async asyncData({ $axios }) {
  //   const url = "https://cpwebassets.codepen.io/assets/embed/ei.js";
  //   const res = await $axios.$get(url);
  //   console.log(res);
  // }
  // },
}
</script>

<style>
.codepen-framework {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
.codepen {
  height: 300px;
  width: 90%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  padding: 1%;
}
</style>