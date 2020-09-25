<template>
	<div class="no-page">
		<div class="head404"></div>
		<div class="txtbg404">
			<div class="txtbox">
				
				<router-link class="home" to='/home' tag="p" active-class="active"><a href="javascript:;">》返回首页</a></router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'no-page',
		props: {},
		data() {
			return {
			}
		},
		components: {},
		mounted() {

		},
		updated() {

		},
		methods: {}
	}
</script>

<style scoped>
	.no-page {
		
		background: #494949 url(https://www.daixiaorui.com/Public/images/head404.png) no-repeat;
		
	}

	.head404 {
		width: 6rem;
		height: 6.625rem;
		/* margin: 3.125rem auto 0 auto; */
		background:url(https://www.daixiaorui.com/Public/images/head404.png) no-repeat ;
		
	}
	.txtbg404 {

		height: 4.5625rem;
	}

	.txtbg404 .txtbox {
		width: 6.375rem;
		/* position: relative; */
		/* top: 1.875rem; */
		/* left: 3.75rem; */
		color: #eee;
		font-size: 0.7375rem;
		text-align: center;
	}
	.txtbg404 .txtbox p a {
		color: #eee;
		text-decoration: none;
	}
</style>
