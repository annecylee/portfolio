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
    position: absolute;
    top: 40%;
    left: 30px;
    z-index: 999;
    @media #{$information-phone} {
      top: 20px;
    }
    .link {
      display: block;
      font-size: 10px;
      color: #737373;
      text-align: left;
      width: 40px;
      border-bottom: 2px solid #fff;
      margin: 30px;
      margin-left: 10px;
      @media #{$information-phone} {
        border-bottom: none;
        height: 40px;
        display: inline;
        color: #bfbfbf;
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
      @media #{$information-phone} {
        border-bottom: 1px solid #fff;
        padding-bottom: 3px;
      }

    }
  }

</style>
