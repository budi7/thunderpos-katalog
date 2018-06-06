const Vue = require("nativescript-vue");
const product = require('./pages/product');

new Vue({
    render: h => h(product),
}).$start();
