<template>
    <el-menu default-active="1">
        <el-menu-item v-for="item in asideList">
            <router-link :to="{path: '/' + item.link}">
                <i class="fa" :class="item.icon"></i>{{ item.name }}
            </router-link>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                asideList: [
                    { name: '首页', icon: 'fa-desktop', link: 'home' },
                    { name: '表格', icon: 'fa-tags', link: 'table' },
                    { name: '表单', icon: 'fa-newspaper-o', link: 'table' }
                ]
            }
        }
    }
</script>

<style>
    .el-menu {
        height: 520px;
        background-color: #E5E5E5;
    }

    .el-menu-item {
        font-size: 18px;
    }

    .el-menu-item i {
        display: inline-block;
        margin-right: 10px;
    }
</style>
