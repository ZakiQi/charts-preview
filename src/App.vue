<template>
  <div id="app">
    <charts-preview :data="pieData" :options="pieData" :theme="'light'">
    </charts-preview>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      styleOptions: {
        height: '400px',
        width: '400px'
      },
      pieData: {
        title : {
            text: '会员数据统计',
            subtext: '动态数据',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            show: true,
            orient: 'vertical',
            left: 'left',
            data: ['微信访问','公众号访问','扫码进入','分享进入','搜索访问']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'微信访问'},
                    {value:310, name:'公众号访问'},
                    {value:234, name:'扫码进入'},
                    {value:135, name:'分享进入'},
                    {value:1548, name:'搜索访问'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
         ]
      },
      lineData: {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
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
  border:1px solid #ccc;
  width: 400px;
  height: 300px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
