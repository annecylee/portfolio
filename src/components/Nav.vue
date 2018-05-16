<template>
  <div class="nav">
    <router-link
      class="link"
      to="/"
      exact
      @click.native="handleClick()">about
    </router-link>
    <router-link
      class="link"
      to="/projects"
      @click.native="handleClick()">projects
    </router-link>
    <router-link
      class="link"
      to="/contact"
      @click.native="handleClick()">contact
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      let divider = document.getElementsByClassName('divider')[0]
      divider.style.top = '0'
      divider.style.transition = '1s'
    }
  }
}
</script>

<style lang="scss" scoped>

  @import "../../assets/app.scss";
  .nav {
    position: relative;
    top: -170px;
    left: 50px;
    float: left;
    z-index: 999;
    @media #{$information-phone} {
      top: -85px;
      float: none;
      left: 0;
    }
    .link {
      display: inline;
      font-size: 16px;
      color: #737373;
      text-align: left;
      width: 40px;
      margin: 30px;
      margin-left: 10px;
      @media #{$information-phone} {
        border-bottom: none;
        height: 40px;
        display: inline;
        color: #bfbfbf;
        font-size: 15px;
      }
    }
    .router-link-exact-active {
      width: 60px;
      color: #fff;
      -webkit-transition: 1s;
      -moz-transition: 1s;
      -ms-transition: 1s;
      -o-transition: 1s;
      transition: 1s;
      border-bottom: 1px solid #fff;
      padding-bottom: 3px;
    }
  }

</style>
