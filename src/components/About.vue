<template>
  <transition name="slide-fade">
    <div class="about">
      <div class="text">
        <h3>Who Am I</h3>
        <p>
          I am a front-end developer, UX designer, and UX researcher. With a keen focus on details, I design beautiful and functional user experiences while also writing clean and elegant code.
        </p>
      </div>
      <div class="image">
        <img
          class="avatar"
          src="~assets/img/avatar.svg">
        <img
          class="name"
          src="~assets/img/name-note.svg">
        <img
          class="skills"
          src="~assets/img/skills.svg">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

  @import "../../assets/app.scss";
  @include transition;
  .about {
    position: relative;
    z-index: 2;
    width: 70%;
    padding-top: 40px;
    margin: -40px auto;
    @media #{$information-phone} {
      width: 80%;
      margin: 60px auto;

    }
    @media #{$information-large} {
      width: 65%;
    }
    .text {
      width: 400px;
      color: #e6f9ff;
      text-align: justify;
      font-size: 18px;
      margin-right: 2%;
      @media #{$information-phone} {
        margin: 0 auto;
        width: 100%;
        font-size: 15px;
      }
      h3 {
        text-align: center;
        font-size: 25px;
        @media #{$information-phone} {
          font-size: 20px;
          margin: 0;
        }
      }
    }
    .image {
      width: 100%;
      right: 0;
      @media #{$information-phone} {
        position: absolute;
        margin-top: -180px;
      }
      .avatar {
        position: absolute;
        top: 0;
        right: 0;
        width: 200px;
        @media #{$information-phone} {
          position: relative;
          width: 120px;
          margin: auto;
          margin-top: -100px;
        }
      }
      .name {
        position: absolute;
        top: 200px;
        left: 10%;
        width: 550px;
        @media #{$information-phone} {
          width: 250px;
          top: 180px;
          left: 0;
        }
      }
      .skills {
        position: absolute;
        width: 150px;
        right: 5%;
        top: 350px;
        overflow: visible;
        @media #{$information-phone} {
          width: 80px;
          right: 0;
          top: 280px;
        }
      }
    }
  }

</style>
