<template>
  <div class="chart-container">
    <el-row>
      <el-col :span="12" class="chart chart_left">
        <div id="userChart" style="height: 650px"></div>
      </el-col>
      <el-col :span="12" class="chart">
        <div id="userDoChart" style="height: 650px"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  data () {
    return {}
  },
  methods: {
    UserChart() {
      const userChart = echarts.init(document.getElementById('userChart'))
      userChart.showLoading()
      const option = {
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'value'
        },
        dataZoom: [
          {
            type: 'slider',
            start: 10,
            end: 60
          }
        ],
        series: [
          {
            type: 'scatter',
            itemStyle: {
              opacity: 0.8
            },
            symbolSize: function (val) {
              return val[2] * 40
            },
            data: [["14.616","7.241","0.896"],
                  ["3.958","5.701","0.955"], ["2.768","8.971","0.669"],
                  ["9.051","9.710","0.171"], ["14.046","4.182","0.536"],
                  ["12.295","1.429","0.962"], ["4.417","8.167","0.113"],
                  ["0.492","4.771","0.785"], ["7.632","2.605","0.645"],
                  ["14.242","5.042","0.368"]]
          }
        ]
      };
      userChart.hideLoading();
      userChart.setOption(option)
    },
    MyChart() {
      const userDoChart = echarts.init(document.getElementById('userDoChart'))
      userDoChart.showLoading()
      const option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['action', '2012', '2013', '2014', '2015'],
            ['sleep', 30.1, 40.5, 45.3, 57.2],
            ['study', 42.5, 50.7, 54.3, 60.7],
            ['read novel', 20.3, 23.5, 30.1, 32.3]
          ]
        },
        xAxis: [
          {type: 'category', gridIndex: 0},
          {type: 'category', gridIndex: 1}
        ],
        yAxis: [
          {gridIndex: 0},
          {gridIndex: 1}
        ],
        grid: [
          {bottom: '55%'},
          {top: '55%'}
        ],
        series: [
          {type: 'bar', seriesLayoutBy: 'row'},
          {type: 'bar', seriesLayoutBy: 'row'},
          {type: 'bar', seriesLayoutBy: 'row'},
          {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
          {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
          {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
          {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
        ]
      }
      userDoChart.hideLoading()
      userDoChart.setOption(option)
    }
  },
  mounted () {
    this.UserChart()
    this.MyChart()
  }
}
</script>
<style>
  .chart{
    background-color: white;
    border-radius: 4px;
  }
  .chart_left{
    border-right:#F2F2F2 10px solid;
  }
</style>
