const Vue = require("nativescript-vue");
const product = require('./pages/product');

var fiAll = require('nativescript-fonticon');
var TNSFontIcon = fiAll.TNSFontIcon;
var fonticon = fiAll.fonticon;

TNSFontIcon.paths = {
    'fa': 'font-awesome.css',
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

new Vue({
    render: h => h(product),
}).$start();
