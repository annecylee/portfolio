<template>
  <transition name="fade">
    <div class="ecf">
      <div class="intro">
        <div class="text">
          <h3>Website for Venture Capital Firm </h3>
          <div class="note">
            <small>UX•UI•Development</small>
            <small>Mar. 2018</small>
          </div>
          <p>This project is to design a website for a venture capital firm. To save on overall cost and reduce development time as required by the client, I delivered a clean and lightweight website less than one week.</p>
        </div>
        <div class="thumbnail">
          <img src="~assets/img/ecf/ecf.jpeg">
        </div>
      </div>
      <div class="details">
        <p class="technoligies">
          <i class="fa fa-paper-plane" />
          VueJS, HTML5, CSS Modules (SASS), Webpack, Full Responsive</p>
        <p>This static website didn't have much functionality. The main task was to meet client's requirement -- as simple as possible. Some details, such as transition,  were still paid attentions to make users' experience more smoothly.</p>
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
  .ecf {
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
    }
  }

</style>
