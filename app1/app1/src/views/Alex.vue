<template>
    <div>
        <h1>Alex Page</h1>
        <div>
            <router-link :to="{name:'alex-info'}">Info</router-link> |
            <router-link :to="{name:'alex-youtube'}">Youtube</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>