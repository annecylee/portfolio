<template>
  <transition name="slide-fade">
    <div class="contact">
      <img
        class="design"
        src="assets/img/design.svg">
      <div class="contact-intro">
        <h3>Get In Touch</h3>
        <p>I'd love to help you develop a user-friendly website</p>
      </div>
      <div class="contact-info">
        <p>
          <a href="mailto:annecylee@gmail.com">
            <i class="fa fa-envelope-o" />
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/tingweili">
            <i class="fa fa-linkedin-square" />
          </a>
        </p>
      </div>
    </div>
  </transition>
</template>

<script>

</script>

<style lang="scss" scoped>

  @import "../../assets/app.scss";
  @include transition;
  .contact {
    margin-top: -100px;
    @media #{$information-phone} {
      width: 80%;
      margin: 0 auto;
    }
  }
  .design {
    margin: 0;
    width: 380px;
    z-index: 0;
    @media #{$information-phone} {
      width: 200px;
      margin: 0 auto;
    }
  }
  .contact-intro {
    position: relative;
    margin-top: -60px;
    z-index: 1;
    @media #{$information-phone} {
      margin-top: 0;

    }
    h3 {
      font-size: 25px;
      color: #b3b3b3;
      @media #{$information-phone} {
        font-size: 18px;
        margin: 0;
      }
    }
    p {
      font-size: 18px;
      text-align: center;
      color: #808080;
      @media #{$information-phone} {
        font-size: 16px;
      }
    }
  }
  .contact-info {
    display: inline-flex;
    position: relative;
    z-index: 1;
    i:hover {
      color: #ccc;
    }
    i {
      color: #fff;
      font-size: 30px;
      margin: 20px;
    }
  }

</style>
