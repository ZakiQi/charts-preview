<!-- 基于vue-echarts的图表预览组件 -->
<template>
  <div class="charts-preview-wrap">
    <slot name="title"></slot>
    <span class="chatrs-name">{{ chartsName }}</span>
    <span class="chatrs-update">数据更新时间：{{ updateTime }}</span>
    <v-chart class="charts-wrap"  v-bind="$attrs" :style="chartsStyleOptions"></v-chart>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";

export default {
  name: 'chartsPreview',

  props: {
    data: {
      type: Object,
      default: () => {}
    },

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
    chartsStyleOptions () {
      return this.styleOptions || {}
    }
  },
  
  components: {
    'v-chart': ECharts
  },

  data () {
    return {
    }
  },

  created () {
  }
}
</script>

<style lang="less" scoped>
.charts-preview-wrap{
  position: relative;
  width:100%;
  height: 100%;

  .charts-wrap{
    // width: 100px;
    // height: 300px;
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