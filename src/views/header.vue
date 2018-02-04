<template>
    <div>
        <span class="header-left">后台管理系统</span>
        <ul class="header-right">
            <li>{{ user.name }}</li>
            <li>({{ user.area }} / {{ user.identity }})</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['user'],
        methods: {}
    }
</script>

<style scoped>
    .header-left {
        display: inline-block;
        color: #fff;
        margin: 10px;
        padding: 7px 0;
    }

    ul.header-right {
        float: right;
        color: #fff;
    }

    .header-right li {
        cursor: pointer;
        float: left;
        list-style: none;
        margin: 10px 5px;
        padding: 6px 0;
    }

    .header-right li:last-child {
        font-size: 16px;
        color: #EFE4B0;
        padding: 8px 0;
    }
</style>
