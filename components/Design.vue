<template>
  <div>

    <div class="codepen">
      <div class="box-border2">
        <div class="box2" align="center">
          <div class="box-title2">
            <div class="dataText2">
              <div>サンプル内容です。</div>
              <div>サンプル内容です。</div>
              <div>サンプル内容です。</div>
            </div>
          </div>
        </div>
      </div>

      <div class="adjacent">
        See the Pen
        <a href="https://codepen.io/heartedwings/pen/wvqYNpy"> 重なり文字枠</a>
        by 安部 千尋 (<a href="https://codepen.io/heartedwings">@heartedwings</a
        >) on <a href="https://codepen.io">CodePen</a>.
      </div>
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
  


<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Estonia&display=swap');

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
  padding: 1%;
  color: #6b413b;
}
.adjacent {
  margin-left: 5%;
}
.container {
  display: flex;
  justify-content: center;
}
.dot-margin {
  margin-top: 2%;
  margin-right: 2%;
  margin-left: 2%;
  margin-bottom: 10%;
}
.border-margin {
  margin-top: 2%;
  margin-right: 2%;
  margin-left: 2%;
  margin-bottom: 10%;
}

/* 2 */
.box-border2 {
  text-align: center;
  position: relative;
  margin-left: 5%;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 3%;
  background: #7ea5e0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.22);
  padding: 22px 8px 22px 8px;
  background-color: #617899;
  color: #617899;
  font-weight: bold;
  width: 70%;
  border-radius: 2%;
  border-top-left-radius: -10%;
}
.box2 {
  width: 80%;
  background: #f7fcff;
  font-size: 1.2em;
  padding: 7px 0 0 16px;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
}
.box-border2::after {
  position: absolute;
  content: 'タイトル';
  font-size: 40px;
  top: 3px;
  width: 100%;
  height: 35px;
  margin: -47px auto 10px -3%;
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  left: 10px;
  right: 10px;
}
.box-border2::before {
  position: absolute;
  content: 'タイトル';
  font-size: 40px;
  top: 3px;
  width: 100%;
  height: 35px;
  margin: -30px auto 10px -3%;
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  left: 10px;
  right: 10px;
  color: #fff;
}
.dataText2 {
  padding-bottom: 5%;
  margin-top: 3%;
  font-size: 16px;
  color: #676988;
}




/* 1-0 */
.dotBox {
  width: 80%;
  height: 350%;
  margin-left: auto;
  margin-right: auto;
}
.dot0 {
  background-color: #ffd699;
  background-image: radial-gradient(#fffff8 20%, transparent 20%);
  background-size: 40px 40px;
}

/* 1-1 */
.dot {
  background-color: #ffd699;
  background-image: radial-gradient(#fffff8 20%, transparent 20%),
    radial-gradient(#ffc46b 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}

/* 1-2 */
.dot2 {
  background-color: #ffd699;
  background-image: radial-gradient(#fffff8 20%, transparent 20%),
    radial-gradient(#ffc46b 20%, transparent 20%),
    radial-gradient(#fff6d0 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0, 20px, 20px 40px;
}

/* 1-3 */
.dot3 {
  background-color: #ffd699;
  background-image: radial-gradient(#fffff8 20%, transparent 20%),
    radial-gradient(#ffc46b 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0, 20px, 20px 0;
}

/* 1-4 */
.dot4 {
  background-color: #ffd699;
  background-image: radial-gradient(#fffff8 20%, transparent 20%),
    radial-gradient(#ffc46b 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 20px 0, 20px 20px;
}



/* 2-0 */
.borderBox {
  width: 80%;
  height: 350%;
  margin-left: auto;
  margin-right: auto;
}
.border0 {
  background: repeating-linear-gradient(-45deg,#e9c62c 0,#e9c62c 10px,#fff 10px,#fff 20px);
}

/* 2-1 */
.border {
  background: repeating-linear-gradient(-45deg,#e9c62c 0,#fff 10px,#fff 10px,#fff 20px);
}

/* 2-2 */
.border2 {
  background: -webkit-repeating-linear-gradient(-45deg,#ffd103 0,#f9ebef 10px,#fff 10px,#fff 20px);
  background: -o-repeating-linear-gradient(-45deg,#b883f5 0,#f9ebef 10px,#fff 10px,#fff 20px);
  background: repeating-linear-gradient(-45deg,#e9c62c 0,#f9ebef 10px,#fff 10px,#fff 20px);
}

/* 2-3 */
.border3 {
  background-color: #ffd699;
  background-image: radial-gradient(#fffff8 20%, transparent 20%),
    radial-gradient(#ffc46b 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0, 20px, 20px 0;
}

/* 2-4 */
.border4 {
  background-color: #ffd699;
  background-image: radial-gradient(#fffff8 20%, transparent 20%),
    radial-gradient(#ffc46b 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 20px 0, 20px 20px;
}
</style>