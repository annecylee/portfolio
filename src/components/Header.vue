<template>
  <div class="header">
    <img
      class="divider"
      src="~assets/img/header.svg">
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

@import "../../assets/app.scss";

  .header {
    height: 200px;
    width: 100%;
    display: inline-flex;
    justify-content: flex-start;
    position: relative;
    z-index: 99;
    @media #{$information-phone} {
      height: 100px;
    }

    .divider {
      position:fixed;
      z-index: 99;
      min-height: 200px;
      top:0;
      bottom:0;
      left:0;
      right:0;
      margin-top: -50px;
      @media #{$information-large} {
        margin-top: -100px;
      }
    }
    .avatar {
      position: absolute;
      top: 22%;
      right: 12%;
      width: 200px;
      z-index: 2;
    }

    .navigation {
      position: absolute;
      color: #fff;
      right: 10%;
      top: 6%;
      font-size: 16px;
    }
    .title{
      position: absolute;
      z-index: -1;
      width: 200px;
      height: 200px;
      /*background-color: #ffe699;*/
      /*line-height: 200px;*/
      text-align: center;
      /*border-radius: 50%;*/
      /*-webkit-box-shadow: 3px 3px 7px #ffffb3;*/
      /*-moz-box-box-shadow: 3px 3px 7px #ffffb3;*/
      /*box-shadow: 0 0 20px #ffffb3, 0px 0px 3px #ffffb3;*/
      span {
        font-size: 15px;
      }
    }
    .developer {
      right: 100px;
      top: 20px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 800px 600px 800px;
      -webkit-transform:rotate(60deg);
      border-color: transparent transparent #e6f2ff transparent;
      opacity: .1;
      rotation: 130deg;
      overflow: hidden;

    }
    .designer {
      background: #e6f2ff;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 800px 600px 800px;
      -webkit-transform:rotate(160deg);
      border-color: transparent transparent #e6f2ff transparent;
      right: 20px;
      top: 20px;
      opacity: .1;
    }
  }

</style>
