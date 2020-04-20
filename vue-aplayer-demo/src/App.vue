<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
    }
</script>

<style>
    *{
        box-sizing: border-box;
    }
    html{
        overflow: hidden;
    }
    body{
        overflow: auto;
        width: calc(100vw + 20px);
    }
    html, body {
        padding: 0;
        margin: 0;
        border: 0;
        height: 100%;
        background: linear-gradient(135deg, #41b883, #4a9cee);
        /*background: linear-gradient(135deg, #fafafa, #f5f5f5);*/
        /*background: #FAFAFA;*/
    }
</style>
