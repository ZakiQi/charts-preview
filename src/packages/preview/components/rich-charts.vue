<!-- 文本图表 -->
<template>
  <div class="rich-chart-wrap" :style="wrapStyle">
    <div class="rich-content" v-html="text">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    insSetup: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      wrapStyle: {}
    }
  },

  watch: {
    insSetup: {
      handler (data = {}) {
        console.log(data, 'data')
        data.backgroundColor && this.$set(this.wrapStyle, 'background-color',  data.backgroundColor)
        console.log(this.wrapStyle, 'this.wrapStyle')
      },
      immediate: true
    },
    
  },

  created () {
    console.log(this.$attrs)
  }
}
</script>

<style lang="less" scoped>
.rich-chart-wrap{
    width: 100%;
    height: 100%;

    .rich-content{
      width: 100%;
      height: 100%;
      overflow: auto;
    }
}
</style>