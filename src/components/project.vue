<template>
    <div>
        <div v-for="(project, index) in projects" :key="project.projectName" class="project">
            <p class="pText">项目名称：<b class="projectName">{{project.projectName}}</b>({{project.time}})</p>
            <p class="pText">项目描述：{{project.projectDescribe}}<input class="editInput" v-model="project.projectDescribe" @keyup.enter="hideEditInput"><button class="funcButt" @click="showEditInput">编辑</button></p>
            <p class="pText">项目职责：{{project.duty}}<input class="editInput" v-model="project.duty" @keyup.enter="hideEditInput"><button class="funcButt" @click="showEditInput">编辑</button></p>
            <button class="funcButt deletePro" @click="deleteProject(index)">删除项目</button>
        </div>
        <button class="funcButt" @click="addProject">添加项目经验</button>
    </div>
</template>

<script>
    import {
        hideEditInput,
        showEditInput
    } from '../common'
    export default {
        props: ['projects'],
        methods: {
            addProject: function() {
                this.projects.push({
                    projectName: 'EEE',
                    time: '2523-9856',
                    projectDescribe: 'this is first one',
                    duty: 'play play play'
                })
            },
            deleteProject: function(index) {
                this.projects.splice(index, 1);
            },
            hideEditInput,
            showEditInput
        }
    }
</script>

<style>
    .project {
        margin-top: 5px;
        position: relative;
    }
    .deletePro {
        position: absolute;
        right: 10px;
        top: 20px;
    }
</style>


