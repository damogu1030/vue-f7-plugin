function install(Vue, options) {
  const { app } = options;
  Vue.f7 = {
    app,
    initVuePage(page, vueOptions) {
      return new Vue(Object.assign({
        el: page.container,
      }, vueOptions || {}));
    },
  };
}

export default install;
