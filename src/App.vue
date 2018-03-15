<template>
  <div id="app">
    <div class="workExp">
      <h1>项目与工作经历</h1>
      <work :work-exp="myData.workExp"></work>
    </div>
  </div>
</template>

<script>
  import work from './components/workExp'
  import perData from './data/data'
  export default {
    data() {
      return {
        title: perData.wanted.profession,
        myData: perData,
        newTodoText: '',
        items: [{
            id: 1,
            title: 'Do the dishes',
            text: 'Do the dishes'
          },
          {
            id: 2,
            title: 'Take out the trash',
            text: 'Take out the trash'
          },
          {
            id: 3,
            title: 'Mow the lawn',
            text: 'Mow the law'
          }
        ],
        nextTodoId: 4
      }
    },
    components: {
      work
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 20px;
    padding-left: 20px;
  }
</style>
