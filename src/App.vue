<template>
  <Menu id="menu" :class="{isFixed: isFixed}" />
  <Carousel :data-list="dataList" />
  <Demo msg="Teaism is coming!" />
</template>

<script>
import Menu from './components/Menu.vue'
import Carousel from './components/Carousel.vue'
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
      dataList: [
        {
          id: 1,
          title: "ONE",
          imgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.itc.cn%2Fimages01%2F20210727%2Ffd7f4e8a747f4e1a80dec1721f8adeb5.jpeg&refer=http%3A%2F%2Fp2.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631289239&t=fa6f4794eee28f877381e91c78068e58"
        },
        // {
        //   id: 2,
        //   title: "TWO",
        //   imgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20210730s%2F680%2Fw1080h400%2F20210730%2F7d6d-f6725c52bde621507950633ed6275377.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631289265&t=a231e993dc26d9384934a1a6716e1ef1"
        // }
      ]
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
    Menu,
    Carousel
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
