
/*
Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: time_data,
      datasets: [
        {
          label: 'Heart Rate',
          backgroundColor: '#f87979',
          data: heart_rate_data
        },
        {
          label: 'Activity',
          backgroundColor: '#c65979',
          data: activity
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
*/
function paginator( arr, perPage )
{
  if ( perPage < 1 || !arr ) return () => [];
  
  return function( page ) {
    const basePage = page * perPage;
  
    return page < 0 || basePage >= arr.length 
      ? [] 
      : arr.slice( basePage,  basePage + perPage );
  };
}
 
const paginator_time = paginator( time_data, 12 );
const paginator_heart_rate = paginator( heart_rate_data, 12 );
const paginator_activity = paginator( activity_data, 12 );
const paginator_cadence = paginator( cadence_data, 12 );

var counter = 0;
// console.log("1: "  +  paginate( 0 ) );  // [ 0, 1, 2, 3, 4 ]
// console.log("2: "  + paginate( 1 ) );  // [ 5, 6, 7, 8, 9 ]
// console.log("3: "  + paginate( 4 ) );  // [ 20, 21, 22, 23 ]

Vue.component('reactive', {
  extends: VueChartJs.Bar,
  mixins: [VueChartJs.mixins.reactiveProp],
  data: function data() {
    return {
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true },

            gridLines: {
              display: true } }],


          xAxes: [{
            ticks: {
              beginAtZero: true },

            gridLines: {
              display: false } }] },



        legend: {
          display: false },

        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: function label(tooltipItems, data) {
              return  tooltipItems.yLabel + " BPM";
            } } },


        responsive: true,
        maintainAspectRatio: false,
        height: 200 } };


  },
  mounted: function mounted() {
    // this.chartData is created in the mixin
    this.renderChart(this.chartData, this.options);
  } });


var vm = new Vue({
  el: '.app',
  data: function data() {
    return {
      datacollection: null };

  },
  created: function created() {
    this.fillData();
  },
  methods: {
    fillData: function fillData() {
      this.datacollection = {
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        labels: paginator_time( counter++ ),
        datasets: [
        {
          label: 'Heart rate',
          backgroundColor: '#f87979',
          data: paginator_heart_rate( counter++ ) 
        },
        {
          label: 'Activity Level',
          backgroundColor: '#p43979',
          data: paginator_activity( counter++ ) 
        },
        {
          label: 'Cadance',
          backgroundColor: '#c65979',
          data: paginator_cadence( counter++ ) 
        }
          ] };



    },
    getRandomInt: function getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    } } });