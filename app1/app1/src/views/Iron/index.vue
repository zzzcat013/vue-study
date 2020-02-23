<script>
export default {
    name:"iron-compontent",
    computed:{
        day:{
            get(){
            return this.$store.state.day
             },
             set(day){
                this.$store.commit("SETDAY",day)
             }
        },
        contacts(){
             return this.$store.state.list
        }
    },
    mounted(){
        let day=this.$route.params.day
        //this.day=day
        this.$store.dispatch("GETLIST",day)
    },
    watch:{
        $route(){
            let day=this.$route.params.day
           this.$store.commit("SETDAY",day)
            console.log("params.day",day)

        }
    }
}
</script>

<template src="./template.html"></template>

<style src="./style.css" scoped></style>
