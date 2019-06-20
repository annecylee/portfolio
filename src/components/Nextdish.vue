<template>
  <transition name="fade">
    <div class="Nextdish">
      <div class="intro">
        <div class="text">
          <h3>Nextdish</h3>
          <div class="note">
            <small>UX•UI•Development</small>
            <small>Jun. 2018</small>
          </div>
          <p>Nextdish is a food delivery company, users can order food on their website (www.nextdish.com).
          I am the only front-end developer in the company to design and implement new features for their website, and to build mobile app.</p>
        </div>
        <div class="thumbnail">
          <img src="~/assets/img/nextdish/nextdish.png">
        </div>
      </div>
      <div class="details">
        <p class="technoligies">
          <i class="fa fa-paper-plane" />
          React Native, Angular 1, jQuery, Bootstrap, HTML5, CSS Modules (SASS), Webpack, Full Responsive</p>
        <p>I designed and implemented new features for their website using Angular 1 and jQuery.
        I also developed mobile app on both ios and android devices using React Native.</p>
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
  @include fade;
  .Nextdish {
    width: 100%;
    height: auto;
    padding: 30px 60px;
    background: #fff;
    border-bottom: 30px solid #e6e6e6;
    @include transition;
    @media #{$information-phone} {
      padding: 30px;
    }
    .intro {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      @media #{$information-phone} {
        flex-wrap: wrap;
      }
      .text {
        width: 50%;
        min-width: 300px;
        @media #{$information-phone} {
          width: 100%;
          min-width: 100px;
        }
        h3 {
          display: block;
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
          text-align: left;
          margin-bottom: 0;
        }
        .note {
          width: 100%;
          display: inline-flex;
          justify-content: space-between;
          color: #666;
        }
        p {
          text-align: justify;
          @media #{$information-phone} {
            text-align: left;
            line-height:26px;
          }
        }
      }
      .thumbnail {
        width: 40%;
        max-width: 200px;
        min-width: 150px;
        @media #{$information-phone} {
          margin: 0 auto;
        }
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .details {
      .technoligies {
        text-align: center;
        font-size: 13px;
        color: #595959;
        padding: 30px 50px;
        text-indent:-.7em;
        border: 1px solid #ccc;
        margin: 30px;
        i {
          margin-right: 10px;
        }
      }
      .image-list {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        @media #{$information-phone} {
          flex-wrap: wrap;
        }
        .image {
          margin: 30px 20px;
          width: 180px;
          height: 200px;
          @media #{$information-phone} {
            margin: 15px auto;
          }
          img {
            width: 100%;
            height: auto;
            box-shadow: 1px 1px 3px #ccc;
            @media #{$information-phone} {
              width: 100%;
              height: auto;
            }
          }
          figcaption {
            color: #6e6e6e;
            font-size: 14px;
          }
        }
      }
    }
  }

</style>
