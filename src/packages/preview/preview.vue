<!-- 基于vue-echarts的图表预览组件 -->
<template>
  <div class="charts-preview-wrap">
    <slot name="title"></slot>
    <span class="chatrs-name">{{ chartsName }}</span>
    <span class="chatrs-update">数据更新时间：{{ updateTime }}</span>
    <!-- echarts图表 -->
    <commom-charts v-bind="$attrs"></commom-charts>
    <!-- 交叉表 -->
    <!-- 副文本 图表 -->
    <!-- 指标卡-->
    <!-- 全局过滤器 -->
  </div>
</template>

<script>
import commomCharts from './components/commom-charts'
export default {
  name: 'chartsPreview',

  props: {
    chartsName: {
      type: String,
      default: '图表名称'
    },

    updateTime: {
      type: String,
      default: '2020-10-21 12:16'
    },

    // 指定图表样式
    styleOptions: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
  },
  
  components: {
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
    height: 100%;
  }
  .chatrs-name{
    font-size:13px;
    font-weight: bold;
    position: absolute;
    top:5px;
    left: 5px;
  }
  .chatrs-update{
    font-size: 12px;
    position: absolute;
    top: 6px;
    right: 5px;
  }
}
</style>