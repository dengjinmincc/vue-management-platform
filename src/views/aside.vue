<template>
  <el-aside :span="3">
    <el-menu>
      <template v-for="item in $router.options.routes[0].children">
        <el-menu-item :index="item.path">
          <router-link :to="{path: item.path}">
            <i class="fa" :class="item.class"></i>
            {{ item.name }}
          </router-link>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>

</script>

<style lang="scss">
  .el-aside {
    height: 100%;
    a {
      text-decoration: none;
    }
  }
</style>
