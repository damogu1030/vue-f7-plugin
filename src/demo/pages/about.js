import Vue from 'vue';
import NavbarInner from '../components/NavbarInner.vue';

const {app, initVuePage} = Vue.f7;

app.onPageBeforeInit('about', page => {
	initVuePage(page, {
		components: {
			NavbarInner,
		},
		data: {
			navbarTitle: 'App About',
			pageTitle: 'About Page',
		},
	});
});