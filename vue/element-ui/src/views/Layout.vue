<template>
  <div class="common-layout">
    <el-container>
      <el-header>旅梦后台管理</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router="true" default-active="2" class="el-menu-vertical-demo">
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <location />
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item index="/home">首页</el-menu-item>
              <el-menu-item index="/account">账号详情</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <document />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <setting />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>



        <el-main>

          <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.common-layout {
  height: 100vh;
}

.el-container {
  height: 100%;
}

.el-header {
  background-color: #f18d00;
  line-height: 60px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}

.el-aside {
  background-color: #f2b96e;
}

:deep(.el-menu) {
  background-color: #f8e2b8;

}

.el-menu-item {
  color: #d4c2b5;
}
</style>