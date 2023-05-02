<template>
	<h1>{{ title }}</h1>
	<router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('vue3-wonjin-template');
</script>

<style lang="scss" scoped>
h1 {
	text-align: center;
	color: $my-color;
	font-size: $my-size;
}
</style>
