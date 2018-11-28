
const Jquery = jQuery = $ = require('jquery');
require('bootstrap');
require('bootstrap-select');


window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('states-cities', require('./components/statesAndcities.vue'));
Vue.component('states-cities-edit', require('./components/statesAndcitiesEdit.vue'));
Vue.component('edit-option', require('./components/EditOption.vue'));

const app = new Vue({
    el: '#main'
});
