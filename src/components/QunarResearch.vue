<template>
  <transition name="fade">
    <div class="qunar-research">
      <div class="intro">
        <div class="text">
          <h3>Usability Testing and User Research of Travel Booking App</h3>
          <div class="note">
            <small>Research•Data Analysis</small>
            <small>Jun. 2013</small>
          </div>
          <p>I worked with coworkers to conduct a series of research to test the existing user experience, to generalize user profile, to provide data support for designing new features. Methodologies included A/B test, user profile, usability testing, survey, interview and data analysis.</p>
        </div>
        <div class="thumbnail">
          <img src="~assets/img/qunarResearch/research.svg">
        </div>
      </div>
      <div class="details">
        <p class="technoligies">
          <i class="fa fa-paper-plane" />
          Usability Testing, A/B Test, Survey, Data Analysis</p>
        <p>I designed tests and questionaries, recruited participants, and conducted research. Feedbacks were applied when designed processes. Different methodologies were applied based on different phases product cycle. For example, a usability test might be conducted when there was going to be a big changes from old design.</p>
        <div class="image-list">
          <figure class="image">
            <img src="~assets/img/qunarResearch/cardSorting.svg">
            <figcaption>Cards Sorting for Information Design</figcaption>
          </figure>
          <figure class="image">
            <img src="~assets/img/qunarResearch/test.svg">
            <figcaption>Testing Usability of Hotel Booking Process</figcaption>
          </figure>
          <figure class="image">
            <img src="~assets/img/qunarResearch/survey.svg">
            <figcaption>Survey Results</figcaption>
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
  .qunar-research {
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
