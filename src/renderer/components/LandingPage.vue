<template>
  <el-container>
    <el-header style="height:66px">
      <figure>
        <img id="logo" src="~@/assets/logo.png" alt="electron-vue" />
      </figure>
    </el-header>
    <el-container>
      <el-aside style="width:288px;padding:20px">
        <el-card>
          <div slot="header" class="clearfix">
            <span>欢迎来到新项目!</span>
          </div>
          <system-information></system-information>
        </el-card>
      </el-aside>
      <el-main>
        <el-card>
          <div slot="header" class="clearfix">
            <span>开始</span>
          </div>

          <el-row>
            <el-col :span="24">Electron-vue with ElementUI.</el-col>
            <el-col :span="24">
              <el-button
                type="primary"
                @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')"
              >阅读文档</el-button>
            </el-col>
          </el-row>
        </el-card>
        <br />
        <el-card>
          <div slot="header" class="clearfix">其它文档</div>
          <el-row>
            <el-col :span="24">
              <el-button type="primary" @click="open('https://electron.atom.io/docs/')">Electron</el-button>
              <el-button type="success" @click="open('https://vuejs.org/v2/guide/')">Vue.js</el-button>
              <el-button
                type="primary"
                @click="open('https://element.eleme.io/#/zh-CN/component/container')"
              >ElementUI</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SystemInformation from "./LandingPage/SystemInformation";

export default {
  name: "landing-page",
  components: { SystemInformation },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>

<style scoped>
#logo {
  height: auto;
  margin-bottom: 20px;
  width: 300px;
}
</style>
