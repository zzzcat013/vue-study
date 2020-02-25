<script>
export default {
    props:{
        index:{
            type : Number,
            required:true
        }
    },
    computed:{
        todo(){
            return this.$store.state.todos[this.index]
        },
        complete:{
            get(){
                return this.$store.state.todos[this.index].complete
            },
            set(val){
                this.$store.commit("UPDATE_TODO",{
                    index:this.index,
                    data:{
                        content:this.todo.content,
                        complete:val
                    }
                })
            }
        }
    },
    methods:{
        deleteHandler(){
            if (confirm(`是否确认删除 ${this.todo.content} ?`))
            this.$store.commit("REMOVE_TODO",this.index)
        }
    }
}
</script>

<template src="./template.html"></template>
<style>

.todoItem {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
}
</style>