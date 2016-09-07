# vue-f7-plugin
## Install
```
npm install vue-f7-plugin
```
Then:
```js
import 'framework7';
import Vue from 'vue';
import VueF7Plugin from 'vue-f7-plugin';

const app = new Framework7({});

Vue.use(VueF7Plugin, {app});
```
Then:
```js
import Vue from 'vue';

const {app, initVuePage} = Vue.f7;

app.onPageBeforeInit('about', page => {
	initVuePage(page, {
		data: {
			navbarTitle: 'App About',
			pageTitle: 'About Page',
		},
	});
});
```
## Demo
```
npm install
npm run dev
```
