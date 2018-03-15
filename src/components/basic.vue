<template>
    <div>
        <h2>{{title}}</h2>
        <p v-for="item in items" :key="item.id">{{item.title}}:{{item.text}}</p>
    </div>
</template>

<script>
export default {
  data: function () {
      return{
          title: '基础:',
          name: 'wdxd',
          age: 25,
          sex: '男',
          email: '123@123.com'
      }
  },
  props: ['items', 'title']
}
</script>
