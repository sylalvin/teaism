<template>
  <div>
    <h1 class="animated rubberBand mt-5">
      {{msg}}
    </h1>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
// import animate from 'animate.css'
export default {
  name: 'Demo',
  props: {
    msg: String
  }
}
</script>
<style scoped>
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .mt-5 {
    margin-top: 5rem;
  }
</style>
