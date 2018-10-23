Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40]
        },
        {
          label: 'Data two',
          backgroundColor: '#c65979',
          data: [22, 11, 33, 55, 66, 33, 22]
        },
        {
          label: 'Data three',
          backgroundColor: '#k43979',
          data: [55, 13, 26, 43, 65, 53, 16]
        },
        {
          label: 'Data 4',
          backgroundColor: '#a65979',
          data: [66, 11, 33, 55, 66, 33, 22]
        },
        {
          label: 'Data 5',
          backgroundColor: '#p43979',
          data: [77, 13, 26, 43, 65, 53, 16]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
  
})

var vm = new Vue({
  el: '.app',
  data: {
    message: 'Hello World'
  }
})