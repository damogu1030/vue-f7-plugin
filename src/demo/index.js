import 'framework7';
import Vue from 'vue';
import VueF7Plugin from '../index.js';

const app = new Framework7({
	material: true,
	pushState: true,
	pushStateOnLoad: false,
});
const mainView = app.addView('.view-main', {});
mainView.loadPage('pages/home.html');

Vue.use(VueF7Plugin, {app});
