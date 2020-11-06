<template>
  <div id="app">
    <!-- 文本 -->
    <div class="charts-box">
      <charts-preview 
        :text="text"
        :insSetup="{backgroundColor: '#2B3651'}"
        :theme="'light'" 
        :chartsType="'rich'"
        :haveHeader="false">
      </charts-preview>
    </div>
    <!-- 柱状图 -->
    <div class="charts-box">
      <charts-preview 
        :options="barData" 
        :chartsName="'柱状图'"
        :updateTime="'2020-10-21 12:16'"
        :theme="'light'" 
        :chartsType="'bar'">
      </charts-preview>
    </div>
    <!-- 堆叠图 -->
    <div class="charts-box" style="width:550px;">
      <charts-preview 
        :options="stackData" 
        :chartsName="'堆叠图'"
        :updateTime="'2020-10-21 12:16'"
        :theme="'light'" 
        :chartsType="'stack'">
      </charts-preview>
    </div>
    <!-- 饼图 -->
    <div class="charts-box">
      <charts-preview 
        :options="pieData" 
        :chartsName="'饼图'"
        :updateTime="'2020-10-21 12:16'"
        :theme="'light'" 
        :chartsType="'pie'" 
        :haveHeader="true">
      </charts-preview>
    </div>
    <!-- 折线图 -->
    <div class="charts-box">
      <charts-preview 
        :options="lineData" 
        :chartsName="'折现图'"
        :updateTime="'2020-10-21 12:16'"
        :theme="'light'" 
        :chartsType="'line'" 
        :haveHeader="true">
      </charts-preview>
    </div>
  </div>
</template>

<script>
import stacked from './assets/mock/stacked'
import pieInfo from './assets/mock/pie'
export default {
  name: 'app',
  data () {
    return {
      text: '<p><span style="font-family: 微软雅黑; font-size: 24px; font-weight: 700; white-space: normal;color:#ffffff">基本面客户趋势分析</span></p>',
      styleOptions: {
        height: '400px',
        width: '400px'
      },
      barData: {
          title: {
              text: '世界人口总量',
              subtext: '数据来自网络'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          legend: {
              data: ['2011年', '2012年']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01]
          },
          yAxis: {
              type: 'category',
              data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
          },
          series: [
              {
                  name: '2011年',
                  type: 'bar',
                  data: [18203, 23489, 29034, 104970, 131744, 630230]
              },
              {
                  name: '2012年',
                  type: 'bar',
                  data: [19325, 23438, 31000, 121594, 134141, 681807]
              }
          ]
      },
      lineData: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
      }
    }
  },

  computed: {
    pieData: function () {
      return pieInfo
    },
    stackData: function () {
      return stacked
    }
  },

  created () {
    console.log(stacked, 'stacked-=-=-==-')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 5px;
}
.charts-box{
  width: 400px;
  height: 300px;
  float: left;
  margin: 10px 10px 0 0;
  border: 1px solid #ccc;
}
</style>
