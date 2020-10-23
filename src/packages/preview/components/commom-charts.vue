<!-- 通用类型图表【柱状图、堆叠图、折线图、饼图、雷达图、散点图】 -->
<template>
  <v-chart v-bind="$attrs" :style="chartsStyleOptions"></v-chart>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/component/legend"
import "echarts/lib/component/tooltip"
import "echarts/lib/chart/bar"
import "echarts/lib/chart/line"
import "echarts/lib/chart/pie"

export default {
  props: {
    // 指定图表样式
    styleOptions: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {}
  },

  computed: {
    chartsStyleOptions () {
      return this.styleOptions || {}
    }
  },

  components: {
    'v-chart': ECharts
  },

  created () {
  }
}
</script>
<style lang="less" scoped>
.rich-chart-wrap{
  width: 100%;
  height: 100%;
}
</style>