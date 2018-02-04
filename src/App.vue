<template>
    <div id="app">
        <el-container>
            <el-header>
                <v-header :user="user"></v-header>
            </el-header>
            <el-container>
                <el-aside>
                    <v-aside></v-aside>
                </el-aside>
                <el-main>
                    <transition>
                        <router-view/>
                    </transition>
                </el-main>
            </el-container>
            <el-footer>
                <v-footer></v-footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import header from './views/header.vue'
    import aside from './views/aside.vue'
    import footer from './views/footer.vue'

    export default {
        data() {
            return {
                user: {
                    name: 'jasmine',
                    area: 'chengdu',
                    identity: 'manager'
                }
            }
        },
        components: {
            'v-header': header,
            'v-aside': aside,
            'v-footer': footer
        }
    }
</script>

<style>
    header {
        width: 100%;
        height: 80px;
        background-color: #409EFF;
        position: relative;
        top: 0;
        left: 0;
    }

    footer {
        background-color: #409EFF;
    }
</style>
