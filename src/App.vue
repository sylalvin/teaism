<template>
  <Menu id="menu" :class="{isFixed: isFixed}" />
  <Demo msg="Teaism is coming!" />
</template>

<script>
import Menu from './components/Menu.vue'
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  data() {
    return {
      isFixed: false,
      offsetTop: 0
    }
  },
  mounted() {
    // 设置bar浮动阈值为 #fixedBar 至页面顶部的距离
    this.offsetTop = document.querySelector('#menu').offsetTop + 60;
    // 开启滚动监听
    window.addEventListener('scroll', this.handleScroll)
  },
  components: {
    Demo,
    Menu
  },
  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var b = document.getElementsByTagName('body')
      console.log(scrollTop)
      if (scrollTop >= this.offsetTop) {
        this.isFixed = true;
        b[0].style.paddingTop = '120px'
      } else {
        this.isFixed = false;
        b[0].style.paddingTop = 0
      }
    }
  },
  unmounted() {
    // 离开页面 关闭监听 不然会报错
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin-top: 0;
}
body {
  margin: 0;
  height: 1000px;
}
.el-menu.el-menu--horizontal {
  padding-top: 60px;
}
.isFixed {
  padding-top: 0 !important;
  top: 0;
  position: fixed !important;
  width: 100%;
}
</style>
