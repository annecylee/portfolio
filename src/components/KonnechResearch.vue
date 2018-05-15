<template>
  <transition name="fade">
    <div class="konnech-research">
      <div class="intro">
        <div class="text">
          <h3>Usability Testing and User Research of Election Apps</h3>
          <div class="note">
            <small>Research•Data Analysis</small>
            <small>Feb. 2012</small>
          </div>
          <p>Founded by City of Detroit, this research project studied users' interactions with new voting system to improve the absentee voting experience for Uniformed and Overseas Citizens.</p>
        </div>
        <div class="thumbnail">
          <img src="assets/img/konnechResearch/survey.jpg">
        </div>
      </div>
      <div class="details">
        <p class="technoligies">
          <i class="fa fa-paper-plane" />
          Usability Testing, Survey, Data Analysis, Interview</p>
        <p>I played a role as a UX designer, I designed website and mobile application for research. I also worked with coworkers to conduct online survey and to interview participants.</p>
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
  .konnech-research {
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
