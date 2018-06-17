# vue-any-loading

> A custom vue-directive for set DOM element or component's loading style.

> 自定义的vue指令 用于展示元素的loading样式

# 安装 Install

`npm i vue-any-loading -S`

# 使用 Usage

```
import Vue from 'vue';
import { vLoading } from 'vue-any-loading';

Vue.directive('loading', vLoading);

new Vue({
  // ...
});
```

```
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
```
