<template>
	<div>
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script lang="ts">
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

	export default {
		name: "MainPage",
		components: { Header, Footer },
	}
</script>

<style lang="scss" scoped>
	
</style>