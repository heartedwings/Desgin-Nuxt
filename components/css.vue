<style>
.codepen {
   height: 300px;
      width: 80%;
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
  margin-left: 10%;
}


/* 1 */
.box-border {
  text-align: center;
  position: relative;
  margin-left: 5%;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  background: #fff6e6;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.22);
  padding: 22px 8px 22px 8px;
  background-color: #fff6e6;
  color: #ee8992;
  font-weight: bold;
  width: 70%;
}
.box {
  width: 80%;
  background: #fff6e6;
  font-size: 1.2em;
  padding: 7px 0 0 16px;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: auto;
  margin-right: auto;
  color: #ee8992;
  font-weight: bold;
}
.box-border::after {
  position: absolute;
  content: '';
  top: 25px;
  width: 30%;
  height: 35px;
  opacity: 0.7;
  margin: -35px auto 10px 35%;
  background-color: #ffd699; /* 背景色 */
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  transform: rotate(-2deg);
  left: 10px;
  right: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.dataText {
  margin-top: 3%;
  font-size: 16px;
  color: #887c67;
}
.dataTitle {
  width: 80%;
  color: #605953;
  border-bottom: 3px dashed #605953; /* 下側の1本線 */
  font-size: 18px;
  font-weight: 900;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}


/* 1-0 */
.dotBox{
  width:20%;
  height:200px;
}
.dot0 {
  background-color: #ffd699;
  background-image:
    radial-gradient(#fffff8 20%, transparent 20%);
  background-size: 40px 40px;
}

/* 1-1 */
.dot {
  background-color: #ffd699;
  background-image:
    radial-gradient(#fffff8 20%, transparent 20%),
    radial-gradient(#ffc46b 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}

/* 1-2 */
.dot2 {
  background-color: #ffd699;
  background-image:
    radial-gradient(#fffff8 20%, transparent 20%),
    radial-gradient(#ffc46b 20%, transparent 20%),
    radial-gradient(#fff6d0 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0, 20px, 20px 20px;
}

/* 1-3 */
.dot3 {
  background-color: #ffd699;
  background-image:
    radial-gradient(#fffff8 20%, transparent 20%),
    radial-gradient(#ffc46b 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0, 20px, 20px 0;
}

/* 1-4 */
.dot4 {
  background-color: #ffd699;
  background-image:
    radial-gradient(#fffff8 20%, transparent 20%),
    radial-gradient(#ffc46b 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 20px 0, 20px 20px;
}

</style>