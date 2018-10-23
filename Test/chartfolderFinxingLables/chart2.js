


Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: datasets_labels,
      datasets: datasets_datasets      
    }, {responsive: true, maintainAspectRatio: false})
  }
  
})

var vm = new Vue({
  el: '.app2',
  data: {
    message: 'Hello World'
  }
})