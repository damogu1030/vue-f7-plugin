import Vue from 'vue';
import NavbarInner from '../components/NavbarInner.vue';

const {app, initVuePage} = Vue.f7;
app.onPageBeforeInit('home', page => {
	const menuList = [
		{
			link: 'pages/about.html',
			icon: 'icon-f7',
			title: 'About Page',
		},
		{
			link: 'pages/load-on-demand.html',
			icon: 'icon-f7',
			title: 'Load On Demand Page',
		}
	];
	initVuePage(page, {
		components: {
			NavbarInner,
		},
		data: {
			navbarTitle: 'App Home',
			menuList,
		},
	});
});