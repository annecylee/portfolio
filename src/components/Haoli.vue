<template>
  <transition name="fade">
    <div class="haoli">
      <div class="intro">
        <div class="text">
          <h3>Water Monitoring System</h3>
          <div class="note">
            <small>UX•UI•Development</small>
            <small>Oct. 2017</small>
          </div>
          <p>Haoli Tech is a startup  provides water monitoring service for industrial and agricultural corps. They need a website to promote products and to allow clients to login the to the system to monitor data across a wide range of devices. Working with the backend developer, I delivered an elegant, functional and lightweight website for them.</p>
        </div>
        <div class="thumbnail">
          <img src="~/assets/img/haoli/haoli.png">
        </div>
      </div>
      <div class="details">
        <p class="technoligies">
          <i class="fa fa-paper-plane" />
          VueJS, HTML5, CSS Modules (SASS), Webpack, Full Responsive</p>
        <p>I used VueJS to build the site and provide the front-end with restful APIs. For example, I used ChartJS to translate number to an interactive chart, and used Map API to design a map view for clients to easily find their sensors on the map. I also use Axios to send asynchronous HTTP request to REST.</p>
        <div class="image-list">
          <figure class="image">
            <img src="~assets/img/haoli/login.png">
            <figcaption>Login Widget</figcaption>
          </figure>
          <figure class="image">
            <img src="~assets/img/haoli/map.png">
            <figcaption>Map View</figcaption>
          </figure>
          <figure class="image">
            <img src="~assets/img/haoli/chart.png">
            <figcaption>Data Chart</figcaption>
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
  .haoli {
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
