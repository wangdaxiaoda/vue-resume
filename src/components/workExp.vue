<template>
    <div>
        <div class="company" v-for="company in workExp" :key="company.companyName">
            <h3>所在公司：&nbsp;{{company.companyName}}</h3>
            <project :projects="company.projects"></project>
        </div>
    </div>
</template>

<script>
    import project from './project'
    export default {
        data: function() {
            return {
                
            }
        },
        components: {
            project
        },
        props: ['workExp']
    };
</script>

<style>
    .company {
        padding-bottom: 10px;
        border-bottom: 1px dotted;
    }
</style>

