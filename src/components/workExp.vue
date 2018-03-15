<template>
  <div>
    <div class="company" v-for="company in workExp" :key="company.companyName">
      <h2>所在公司：&nbsp;{{company.companyName}}</h2>
      <project :projects="company.projects"></project>
    </div>
  
  </div>
</template>

<script>
  import project from './project'
  export default {
    data: function() {
      return {}
    },
    components: {
      project
    },
    props: ['workExp']
  };
</script>

<style>
  .projectName {
    color: red;
  }
</style>

