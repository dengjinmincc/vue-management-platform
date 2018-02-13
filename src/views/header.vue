<template>
  <el-header class="platform-header">
    <span>后台管理系统</span>
    <ul>
      <li>{{ user.name }}</li>
      <li> ( {{ user.identity }} / {{ user.area }} )</li>
    </ul>
  </el-header>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style lang="scss">
$background-color: #409EFF;

.el-header {
  background-color: $background-color;
  color: #fff;
  span {
    display: inline-block;
    float: left;
    margin-top: 20px;
    font-size: 20px;
  }
  ul {
    list-style: none;
    float: right;
    li {
      float: left;
    }
  }
}
</style>
