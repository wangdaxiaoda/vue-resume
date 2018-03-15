<template>
  <div>
    <div class="company" v-for="company in perData.workExp" :key="company.companyName">
      <h2>所在公司：&nbsp;{{company.name}}</h2>
      <project :></project>
    </div>
  
  </div>
</template>

<script>
  import perData from '../data/data'
  import project from './project'
  export default {
  
    data: function() {
  
      return {
  
        company: {
  
          name: "sibei"
  
        }
  
      };
  
    }
  
  };
</script>

<style>
  .projectName {
    color: red;
  }
</style>

