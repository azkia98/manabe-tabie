
const Jquery = jQuery = $ = require('jquery');
require('bootstrap');
require('bootstrap-select');
$.fn.selectpicker.Constructor.BootstrapVersion = '4';

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
Vue.component('member-checkbox', require('./components/member-checkbox.vue'));
Vue.component('print-selected-members-cards', require('./components/print-selected-members-cards.vue'));
Vue.component('select-box-for-states-cities-search', require('./components/cities-states-search-box.vue'));

const app = new Vue({
    el: '#main'
});
