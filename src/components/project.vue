<template>
    <div>
        <div v-for="project in projects" :key="project.projectName">
            <p>项目名称：<b class="projectName">{{project.projectName}}</b>({{project.time}})</p>
            <p>项目描述：{{project.dec}}</p>
            <p>项目职责：{{project.duty}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['projects']
    }
</script>

