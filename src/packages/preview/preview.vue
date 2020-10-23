<!-- 基于vue-echarts的图表预览组件 -->
<template>
  <div class="charts-preview-wrap">
    <!-- 图表头部 -->
    <chart-header v-bind="$attrs" v-if="haveHeader"></chart-header>
    
    <!-- echarts图表 -->
    <commom-charts v-bind="$attrs" class="charts-wrap" :style="initStyle"></commom-charts>
    <!-- 交叉表 -->
    <!-- 副文本 图表 -->
    <!-- 指标卡-->
    <!-- 全局过滤器 -->
  </div>
</template>

<script>
import commomCharts from './components/commom-charts'
import chartHeader from './components/chart-header'
export default {
  name: 'chartsPreview',

  props: {
    // 是否需要头部
    haveHeader: {
      type: Boolean,
      default: true
    },
    // 指定图表样式
    styleOptions: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    initStyle: function () {
      // 没有头部的时候图表高度不需要缩进
      if (!this.haveHeader) return { height: '100%' }
    }
  },
  
  components: {
    chartHeader,
    commomCharts
  },

  data () {
    return {
      typeArr: ['cross', 'text']
    }
  },

  created () {
    // console.log(this.$attrs, 'this')
  }
}
</script>

<style lang="less" scoped>
.charts-preview-wrap{
  position: relative;
  width:100%;
  height: 100%;

  .charts-wrap{
    width:100%;
    height: calc(~"100% - 26px");
  }
}
</style>