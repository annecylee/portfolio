<template>
  <div id="app">
    <Header />
    <Nav />
    <router-view ref="view"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'

export default {
  components: {
    Header,
    Nav
  }
}
</script>

<style lang="scss">
@import "../assets/app.scss";

* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html, body, #app {
  margin:0;
  padding:0;
  height: 100%;
  background: #1a1c33;
}

#app {
  font-family: 'Hiragino Sans GB', 'Source Sans Pro', sans-serif, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

p {
  text-align: left;
}

li {
  display: inline-flex;
  margin: 0 10px;
}
</style>
