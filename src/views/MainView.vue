<template>
	<div class="main-view">
		<img :src="mainViewImage" alt="종강하고싶다" />
	</div>
</template>

<script setup>
import mainViewImage from '@/assets/jongang.jpg';
</script>

<style lang="scss" scoped>
.main-view {
	text-align: center;
	padding: $my-size;
	img {
		width: 50%;
	}
}
</style>
