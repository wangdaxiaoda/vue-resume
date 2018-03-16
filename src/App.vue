<template>
  <div id="app">
    <div class="basicMess">
      <h3>基本资料</h3>
      <p>姓名：{{basic.name}}</p>
      <p>性别：{{basic.sex}}</p>
      <p>手机：{{basic.phone}}</p>
      <p>邮箱：{{basic.email}}</p>
    </div>
    <div class="profession">
      <h3>职业意向</h3>
      <p>期望职位：{{wanted.profession}}</p>
      <p>期望地点：{{wanted.place}}</p>
      <p>期望月薪：{{wanted.salary}}</p>
    </div>
    <div class="eduExp">
      <h3>教育经历</h3>
      <h4>{{eduExp.schoolName}}({{eduExp.time}})</h4>
      <p>专业名称：{{eduExp.major}}</p>
      <p>学历：{{eduExp.education}}</p>
    </div>
    <div class="workExp">
      <h1>项目与工作经历</h1>
      <work :work-exp="workExp"></work>
    </div>
    <div class="personalSkills">
      <h3>个人技能</h3>
      <p>{{personalSkills}}</p>
    </div>
    <div class="introduction">
      <h3>个人描述</h3>
      <p>{{introduction}}</p>
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
        workExp: perData.workExp,
        basic: perData.basic,
        wanted: perData.wanted,
        eduExp: perData.eduExp,
        introduction: perData.introduction,
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
    computed: {
      personalSkills: () => perData.personalSkills.join('')
    },
    components: {
      work
    }
  };
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 20px;
    padding-left: 20px;
  }
</style>
