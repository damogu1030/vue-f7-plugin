import Vue from 'vue';

const {app, initVuePage} = Vue.f7;

app.onPageBeforeInit('load-on-demand', page => {
	app.showPreloader();
	require.ensure([], require => {
		const NavbarInner = require('../components/NavbarInner.vue');
		const _ = require('lodash');
		initVuePage(page, {
			components: {
				NavbarInner,
			},
			data: {
				navbarTitle: 'App Load On Demand',
				pageTitle: 'Load On Demand Page',
			},
			ready() {
				app.hidePreloader();
			},
		});
	}, 'load-on-demand');
});