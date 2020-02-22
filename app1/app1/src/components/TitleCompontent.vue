<template>
    <h1 class="title">{{title}}</h1>
</template>

<script>
export default {
    name:"title-compontent",
    props:{
        title:{
            type:String,
            requiredt:true
        }
    }
}
</script>

<style scoped>
    h1.title{
        color:orange
    }
</style>