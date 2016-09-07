<template>
	<div class="navbar-inner">
		<div class="left">
			<a href="#" class="link back icon-only" v-if="hasBackLink">
         <i class="icon icon-back"></i>
      </a>
		</div>
		<div class="center">{{title}}</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
			},
			hasBackLink: {
				type: Boolean,
			},
		},
	};
</script>