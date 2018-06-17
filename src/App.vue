<template>
  <div>
    <div id="demo" v-loading="isLoading">
      哼
    </div>
    <button @click="isLoading = !isLoading">Click me</button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false
      }
    }
  }
</script>

<style>
  #demo {
    width: 200px;
    height: 200px;
    background: green;
    color: white;
    line-height: 200px;
    text-align: center;
    font-size: 40px;
  }
</style>
