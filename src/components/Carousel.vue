<template>
    <el-carousel :autoplay="dataList.length > 0" :indicator-position="dataList.length < 2 ? 'none' : ''" :arrow="dataList.length < 2 ? 'never' : 'hover'">
      <el-carousel-item v-for="item in dataList" :key="item.id">
        <!-- <h3 class="small">{{ item.title }}</h3> -->
        <img :src="item.imgUrl" :alt="item.title">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    name: 'Carousel',
    props: {
        dataList: {
            type: Array,
            required: true,
            default: function(){
                return []
            }
        }
    },
    data() {
      return {

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  img {
      width: 100%;
      height: 100%;
  }
</style>