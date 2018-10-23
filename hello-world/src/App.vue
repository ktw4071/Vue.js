<template>
  <div id="app">
    <home></home>
     <commitChart></commitChart>
     <lineChart></lineChart>
  </div>
 

</template>

<script>
// import  from './components/Home' //We are importing the Home component
import CommitChart from '/.component/CommitChart'
export default {
  name: 'app',
  components: {
    // Home
    CommitChart
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
  margin-top: 60px;
}
</style>