<template>
  <section class="container">
    <div>

      <div class="title">Page of ADD TODO</div>
      <div class="main">
        <list />
      </div>
    </div>
  </section>
</template>

<script>
import list from '../components/list'

export default {
  components: {
    list,
  },

  head() {
    return {
      title: 'addTodo Page',
    }
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

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
</style>