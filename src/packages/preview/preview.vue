<!--
  @ 基于vue-echarts的图表预览组件 @

  ** 1、外部可以传所有echart的参数，像使用原生Echarts一样
  ** 2、组件大小默认是100%（自适应），所以只要在包裹组件的div中设置实际的大小即可
  ** 3、可以指定图表大小，外部传入styleOptions:对象，宽高等信息
-->
<template>
  <div class="charts-preview-wrap">
    <slot name="title"></slot>
    <span class="chatrs-name">图标名称</span>
    <span class="chatrs-update">数据更新时间：暂无</span>
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
    position: absolute;
    top:5px;
    left: 5px;
  }
  .chatrs-update{
    font-size: 12px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
</style>