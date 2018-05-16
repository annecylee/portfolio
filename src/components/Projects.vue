<template>
  <transition name="slide-fade">
    <div class="projects">
      <div
        :class="{'project-list':scrolled}"
        class="project-list">
        <div
          :class="[{active:projectActived==='development'},{'project-scale':projectActived}]"
          class="project development"
          @click="handleClick($event);projectActived='development'">
          <span>Development</span>
        </div>
        <div
          :class="[{active:projectActived==='ux'},{'project-scale':projectActived}]"
          class="project ux"
          @click="handleClick();projectActived='ux'">
          <span>UX/UI</span>
        </div>
        <div
          :class="[{active:projectActived==='research'},{'project-scale':projectActived}]"
          class="project research"
          @click="handleClick();projectActived='research'">
          <span>Research</span>
        </div>
      </div>
      <div
        class="project-detail">
        <Haoli v-if="projectActived==='development'"/>
        <ECF v-if="projectActived==='development'"/>
        <Qunar v-if="projectActived==='ux'"/>
        <Konnech v-if="projectActived==='ux'"/>
        <QunarResearch v-if="projectActived==='research'"/>
        <KonnechResearch v-if="projectActived==='research'"/>
      </div>
      <p class="description">I am passionate about designing innovative and user-friendly experience. </p>
    </div>
  </transition>
</template>

<script>
/* eslint-disable vue/order-in-components */

import Haoli from '../components/Haoli.vue'
import ECF from '../components/ECF.vue'
import Qunar from '../components/Qunar.vue'
import Konnech from '../components/Konnech.vue'
import QunarResearch from '../components/QunarResearch.vue'
import KonnechResearch from '../components/KonnechResearch.vue'

export default {
  components: {
    Haoli,
    ECF,
    Qunar,
    Konnech,
    QunarResearch,
    KonnechResearch
  },
  data () {
    return {
      projectActived: '',
      scrolled: false
    }
  },
  methods: {
    handleClick () {
      let divider = document.getElementsByClassName('divider')[0]
      divider.style.top = '-150px'
      divider.style.transition = '1s'
      let projectList = document.getElementsByClassName('project-list')[0]
      projectList.classList.add('project-list-move')
    },
    handleScroll () {
      let projectList = document.getElementsByClassName('project-list')[0]
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
      console.log(scrollTop)
      if (scrollTop > 48) {
        projectList.classList.add('fix-project-list-move')
      } else {
        projectList.classList.remove('fix-project-list-move')
      }
    }
  },
  mounted () {
    window.addEventListener('wheel', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('wheel', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>

  @import "../../assets/app.scss";
  @include transition;
  .projects {
    position: relative;
    z-index: 99;
    width: 80%;
    margin: 20px auto;
    @media #{$information-phone} {
      width: 100%;
      padding: 0;
    }
    .project-list {
      display: inline-flex;
      position: relative;
      @media #{$information-phone} {
        flex-direction: column;
      }
      width: 100%;
      .project {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        color: #fff;
        line-height: 200px;
        text-align: center;
        border: 1px solid #aafff9;
        margin: 0 auto;
        overflow: hidden;
        cursor: pointer;
        @media #{$information-phone} {
          width: 100px;
          height: 100px;
          line-height: 100px;
          margin: 20px auto;
          span {
            font-size: 13px;
          }
        }
        img {
          height: 100%;
        }
      }
      .project:hover {
        border: 3px solid #aafff9;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        -webkit-transition: .3s;
        -moz-transition: .3s;
        -ms-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        span {
          position: relative;
          color: #1a1c33;
          font-weight: 800;
        }
      }
      .development:hover {
        background-image: url("~assets/img/haoli/haoli.png");
      }
      .ux:hover {
        background-image: url("~assets/img/qunar/qunar.png");
      }
      .research:hover {
        background-image: url("~assets/img/research/research.png");
      }
      .project-scale {
        width: 80px;
        height: 40px;
        transition: 1s;
        line-height: 35px;
        border-radius: 10px;
        @media #{$information-phone} {
          margin-top: 50px;
          width: 90px;
          span {
            font-size: 12px;
            z-index: 999;
          }
        }
      }
      .project-scale:hover {
        background-image: none;
        border: 2px solid #aafff9;
      }
      .active {
        background: #aafff9;
        color: #1a1c33;
      }
    }
    .project-list-move {
      justify-content: center;
      flex-direction: row;
      width: 320px;
      height: 100px;
      float: right;
      margin-top: -160px;
      span {
        z-index: 100;
        font-size: 10px;
      }
      @media #{$information-phone} {
        float: none;
        top: -70px;
      }
    }
    .fix-project-list-move {
      @media #{$information-phone} {
        position: fixed;
        top: 130px;
        left: 0;
        right: 0;
        background: #1a1c33;
        height: 110px;
        width: 100%;
        z-index: 999;
        -webkit-transition: 0s;
        -moz-transition: 0s;
        -ms-transition: 0s;
        -o-transition: 0s;
        transition: 0s;
        .project {
          transform: scale(.8);
        }
      }
    }
    .project-detail {
      position: absolute;
      width: 100%;
      margin-top: -100px;
      @media #{$information-phone} {
        margin-top: -50px;
      }
    }
    .description {
      margin-top: 50px;
      color: #737373;
      text-align: center;
      @media #{$information-phone} {
        display: none;
      }
    }
  }

</style>
