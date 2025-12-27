<template>
  <div class="layout-page">
    <!-- 二级路由视口，这里加载 children 配置的路由 -->
    <router-view />
    <!-- van-tabbar 添加 route 属性开启路由切换模式 -->
    <van-tabbar route>
      <!-- to 跳转页面 -->
      <van-tabbar-item icon="notes-o" to="/home">面经</van-tabbar-item>
      <van-tabbar-item icon="star-o" to="/collect">收藏</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/like">喜欢</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
