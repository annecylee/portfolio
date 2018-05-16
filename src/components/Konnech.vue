<template>
  <transition name="fade">
    <div class="konnech">
      <div class="intro">
        <div class="text">
          <h3>Election Systems</h3>
          <div class="note">
            <small>UX•Research</small>
            <small>Dec. 2011</small>
          </div>
          <P>As a full-time UX Specialist, I designed a set of systems that helped election administrators manage election assets, polling locations, poll workers, and call centers.</P>
        </div>
        <div class="thumbnail">
          <img src="~assets/img/konnech/konnech.png">
        </div>
      </div>
      <div class="details">
        <p class="technoligies">
          <i class="fa fa-paper-plane" />
          Axure, Photoshop, Flow Chart, Prototyping, Usability Testing, User Research</p>
        <p> I designed processes and interfaces for web and mobile applications. Analyzing market data and user patterns, drawing flowcharts, designing high-fidelity mockups, I worked closely with various teams.</p>
        <img
          class="examples"
          src="~assets/img/konnech/examples.jpg">
        <div class="image-list">
          <figure class="image">
            <img src="~assets/img/konnech/electionResult.svg">
            <figcaption>Election Results System</figcaption>
          </figure>
          <figure class="image">
            <img src="~assets/img/konnech/pls.svg">
            <figcaption>PollChief System</figcaption>
          </figure>
          <figure class="image">
            <img src="~assets/img/konnech/iPetitioner.svg">
            <figcaption>iPetitioner</figcaption>
          </figure>
        </div>
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
  .konnech {
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
        max-width: 300px;
        min-width: 200px;
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
      .examples {
        width: 80%;
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
          width: 200px;
          height: 200px;
          @media #{$information-phone} {
            margin: 20px auto;
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
