<template>
    <el-menu default-active="1">
        <el-menu-item v-for="item in asideList">
            <i class="fa" :class="item.icon"></i>{{ item.name }}
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                asideList: [
                    { name: '首页', icon: 'fa-desktop' },
                    { name: '表格', icon: 'fa-tags' },
                    { name: '表单', icon: 'fa-newspaper-o' }
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
