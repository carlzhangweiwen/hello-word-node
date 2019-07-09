<template>
  <div id="app">
    <div>
        <button class="btn" @click="clickme">click me</button>
    </div>
    <img src="./assets/logo.png">
     <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
import comjs from './assets/common.js'   //可以选择需要的方法引入
export default {
  name: 'App',
  methods:{
            clickme(){
                comjs.title('你点我了');
            }
        }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
    @import './assets/css/bootstrap.min.css';
</style>
