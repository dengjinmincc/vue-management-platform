<template>
  <el-row class="container" style="height: 100%;">
    <v-header :user="user"></v-header>
    <el-col :span="24" class="main">
      <el-row>
        <v-aside></v-aside>
        <section class="content">
          <el-col :span="21" :offset="3">
            <transition>
              <router-view/>
            </transition>
          </el-col>
        </section>
      </el-row>
    </el-col>
    <v-footer/>
  </el-row>
</template>

<script>
import header from './header.vue'
import aside from './aside.vue'
import footer from './footer.vue'

export default {
  data () {
    return {
      user: {
        name: '李明',
        identity: '管理者',
        area: '成都'
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

<style lang="scss">
  .el-row {
    height: 100%;
  }
</style>
