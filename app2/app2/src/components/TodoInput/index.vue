<script>
export default {
    // name:"TodoInput",
    data(){
        return {
            todo:''
        }
    },
    methods:{
        submitHandler(){
            if (!this.todo) return
            this.$store.commit("ADD_TODO",{
                content:this.todo,
                complete:false
                }),
            this.todo=''
        }
    }
}
</script>

<template src="./template.html"></template>
<style>

.todoInput {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
}
</style>