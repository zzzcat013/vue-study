<script>
export default {
    name:"input-compontent",
    props:{
        text:{
            type:String,
            required:true
        }
    },
    computed:{
        inputText:{
            get(){
                return this.text
            },
            set(val){
                //this.$emit("textchange",val)
                this.$emit("update:text",val)
            }
        }
    }
}
</script>

<template src="./template.html"></template>

<style src="./style.css" scoped></style>
