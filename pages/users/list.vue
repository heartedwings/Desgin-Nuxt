<template>
<div class="container">
  <div class="title">Opinion bords</div>
    <Editor v-model="data" :image-provider="imageProvider" />
</div>
</template>
 
<script>
export default {
  components: {},
  data() {
    return {
      data: '',
      imageProvider: {
        name: 'mebee', // provider name
        token:
          '-qWchT63mkZEJch0ygm3bN9h3peInHqCcSAEMtvV:9YAz4dCiB3EAdYuoDVO0YvObtqY=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTkwMjAyODY1NX0=', // upload token
      },

    }
  },
}
</script>
 
<style>
.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

</style>