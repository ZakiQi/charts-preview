<!-- 图表头部 -->
<template>
  <div class="header-wrap">
    <span class="chatrs-name">{{ chartsName }}</span>
    <span class="chatrs-update">数据更新时间：{{ updateTime }}</span>
  </div>
</template>

<script>
export default {
  props: {
    chartsName: {
      type: String,
      default: '图表名称'
    },

    updateTime: {
      type: String,
      default: '2020-10-21 12:16'
    }
  },

  data () {
    return {}
  },

  created () {
    console.log(this.$attrs)
  }
}
</script>

<style lang="less" scoped>
.header-wrap{
    width: 100%;
    height:26px;
    position: relative;

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