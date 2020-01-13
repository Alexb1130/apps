<script>
import { mapActions } from "vuex";
import TabIcon from '~/components/TabIcon';
export default {
    components: {
        TabIcon
    },
    methods: mapActions({ getApps: "ratings/getApps" }),
    created() {
		this.getApps();
	}
}
</script>
<template>
	<div class="container">
		<div class="links-container">
			<nuxt-link to="/game">
				Игры
				<TabIcon />
			</nuxt-link>
			<nuxt-link to="/">
				Тинькофф
				<TabIcon />
			</nuxt-link>
		</div>
		<nuxt />
	</div>
</template>

<style lang="scss">
html {
	font-family: "Museo Sans Cyrl", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 15px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

body {
	background: #f1f1f5;
}

.container {
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	padding: 50px 10px;
	min-height: 100vh;
	/* display: flex;
	justify-content: center; */
}

.links-container {
	padding-left: 10px;
	a {
		text-align: center;
		height: 36px;
		display: inline-block;
		position: relative;
		font-size: 15px;
		line-height: 18px;
		font-weight: 500;
		letter-spacing: 0.13px;
		color: #979898;
		text-decoration: none;
		background-color: #e8e8e8;
		border-top-left-radius: 13px;
		border-top-right-radius: 13px;
		z-index: 0;
		margin: 0 -10px;
		padding: 5px 25px;
	}

	.tab-icon {
		position: absolute;
		z-index: -1;
		fill: transparent;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	.nuxt-link-exact-active {
		color: #1d353d;
		background-color: transparent;
		z-index: 5;
	}

	.nuxt-link-exact-active .tab-icon {
		fill: #fff;
	}
}
</style>
