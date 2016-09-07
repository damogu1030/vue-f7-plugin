# vue-f7-plugin
## Install
```
npm install vue-f7-plugin
```
Import:
```js
import 'framework7';
import Vue from 'vue';
import VueF7Plugin from 'vue-f7-plugin';

const app = new Framework7({});

Vue.use(VueF7Plugin, {app});
```
Use:
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
Please see http://www.dmgxmg.com/vue-f7-plugin/demo/

Demo dev
```
npm install
npm run dev
```
