<template>
  <div id="app">
    <type1 :items="items" :title="title">
    </type1>
    <div class="workExp">
      <h1>项目与工作经历</h1>
      <workExp></workExp>
    </div>
  </div>
</template>

<script>
  import type1 from './components/basic';
  import workExp from './components/workExp';
  import perData from './data/data'
  export default {
    data() {
      return {
        title: perData.wanted.profession,
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
      type1,
      workExp
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
