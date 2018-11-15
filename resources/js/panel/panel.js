
const Jquery = jQuery = $ = require('jquery');
require('bootstrap');



window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('states-cities', require('./components/statesAndcities.vue'));

const app = new Vue({
    el: '#main'
});
