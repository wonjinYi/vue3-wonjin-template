<template>
  <router-view class="router-view"></router-view>
</template>

<script setup></script>

<!-- App.vue local style -->
<style lang="scss" scoped>
.router-view {
  min-height: 100vh;
}
</style>

<!-- global style -->
<style lang="scss">
@import "@/assets/styles/reset.css";
@import "@/assets/styles/main.scss";
</style>
