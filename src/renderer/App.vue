<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "my-project"
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*   -webkit-app-region: drag;
  -webkit-user-select: none; */
}
.el-col {
  margin-top: 6px;
  margin-bottom: 6px;
}
input,
option,
select,
textarea,
button,
.el-notification__content,
.el-tooltip__popper,
.el-notification,
.el-menu,
.el-dialog__wrapper,
.el-dialog__wrapper,
.el-switch,
.el-slider,
.el-slider__runway,
.el-message {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
