<template>
    <div id="app">
        <basic :items="basicItem" @add="addBasic"></basic>
        <basic :items="wanted" @add="addWanted"></basic>
        <basic :items="eduExp" @add="addEdu"></basic>
        <div class="workExp">
            <h2>项目与工作经历</h2>
            <work :work-exp="workExp"></work>
        </div>
        <div class="personalSkills">
            <h2>个人技能</h2>
            <p class="pText">{{personalSkills}}<input v-model="personalSkills" class="editInput" @keyup.enter="hideEditInput"><button class="funcButt" @click="showEditInput">编辑</button></p>
        </div>
        <div class="introduction">
            <h2>个人描述</h2>
            <p class="pText">{{introduction}}<input v-model="introduction" class="editInput" @keyup.enter="hideEditInput"><button class="funcButt" @click="showEditInput">编辑</button></p>
        </div>
        <button class="complete funcButt" @click="complete">完成修改</button>
    </div>
</template>

<script>
import work from "./components/workExp";
import perData from "./data/data";
import basic from "./components/basic";
import $ from "jquery";
import { showEditInput, hideEditInput } from "./common";
export default {
  data() {
    return {
      workExp: perData.workExp,
      basicItem: perData.basic,
      wanted: perData.wanted,
      eduExp: perData.eduExp,
      introduction: perData.introduction,
      personalSkills: perData.personalSkills
    };
  },
  computed: {
  },
  components: {
    basic,
    work
  },
  methods: {
    addBasic: function(text, value) {
      this.basicItem.message.push({
        text: text,
        value: value
      });
    },
    addWanted: function(text, value) {
      this.wanted.message.push({
        text: text,
        value: value
      });
    },
    addEdu: function(text, value) {
      this.eduExp.message.push({
        text: text,
        value: value
      });
    },
    complete: function() {
      $(".funcButt").hide();
    },
    showEditInput,
    hideEditInput
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

button {
  cursor: pointer;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  padding: 20px 0;
  left: 50%;
  margin-left: -300px;
  width: 600px;
}

#app > div {
  margin-bottom: 10px;
}

.funcButt {
  margin-left: 5px;
}

.editInput {
  display: none;
  margin-left: 5px;
}

.pText {
  width: 488px;
}

h2 {
  padding-bottom: 10px;
}
</style>
