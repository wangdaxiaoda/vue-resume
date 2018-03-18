<template>
    <div>
        <h2>{{items.title}}</h2>
        <p v-for="(value, key) in items.message" :key="key" class="pText">{{value.text}}{{value.value}}<input v-model="value.value" v-if="false"><button class="funcButt">编辑</button><button class="funcButt" @click.prevent="removeItem">删除</button>
        </p>
        <p>
            <input type="text" class="itemText" 
            v-model="addItemText" 
            v-if="isText" 
            @keyup.enter.self="itemSubmit" 
            placeholder="请填入属性名">
            <input type="text" class="itemValue" 
            v-model="addItemValue" 
            v-if="isValue" 
            @keyup.enter.self="itemSubmit" 
            placeholder="请填入属性值">
        </p>
        <button class="funcButt addItem" @click="addItem">添加选项</button>
    </div>
</template>

<script>
    import {removeItem, editItem} from '../common'
    export default {
        data() {
            return {
                myItem: this.items,
                addItemText: '',
                addItemValue: '',
                isText: !1,
                isValue: !1,
            }
        },
        props: ['items'],
        computed: {},
        components: {
        },
        methods: {
            itemSubmit: function(event) {
                var inputVal = event.target.value;
                if (inputVal == '') {
                    alert('请先填入值');
                    return;
                }
                if (this.addItemText && this.addItemValue) {
                    this.isValue = this.isText = !1;
                    this.$emit('add', this.addItemText, this.addItemValue);
                    this.addItemText = this.addItemValue = '';
                }
            },
            addItem: function() {
                if (this.isText || this.isValue) {
                    alert('请先完成上一个选项添加,然后继续下一个');
                    return;
                }
                this.isText = this.isValue = !0;
            },
            removeItem
        }
    }
</script>

<style>
    .itemText,
    .itemValue {}
</style>
