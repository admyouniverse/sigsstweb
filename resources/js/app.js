/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import Vuex from 'vuex';
import BlockUI from 'vue-blockui';
import { VueMaskDirective } from 'v-mask'
import JsonExcel from 'vue-json-excel'
import BootstrapVue from 'bootstrap-vue'
import vSelect from 'vue-select'
import Multiselect from 'vue-multiselect'
import VueSimpleAlert from "vue-simple-alert"



Vue.directive('mask', VueMaskDirective);
Vue.use(BlockUI);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(require('vue-moment'));
Vue.use(VueSimpleAlert);


// register globally
Vue.component('multiselect', Multiselect)

// import VueCropper from 'vue-cropper' 

// Vue.use(VueCropper)
 
// //  
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('downloadExcel', JsonExcel);
Vue.component('v-select', vSelect);


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const store = new Vuex.Store({
    state: {
        imagem: '',
        showModal: false,
        avatar: null,
        postos: null
    }
});

const app = new Vue({
    el: '#app',
    store,
    mounted() {
        this.$root.$on('montou', function($id) {
            console.log($id);

            $.fn.dataTable.moment('DD/MM/YYYY'); //Formatação sem Hora


            $($id[0]).DataTable({
                "lengthMenu": [
                    [50, -1],
                    [50, "Todos"]
                ],
                "columnDefs": [{
                    "targets": 'no-sort',
                    "orderable": false,
                }],
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json"
                }
            });
        });


        this.$root.$on('atualizou', function($id) {

            $($id[0]).DataTable().destroy();
            setTimeout(function() {
                $($id[0]).DataTable({
                    "lengthMenu": [
                        [50, -1],
                        [50, "Todos"]
                    ],
                    "columnDefs": [{
                        "targets": 'no-sort',
                        "orderable": false,
                    }],
                    "language": {
                        "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json"
                    }
                });
            }, 200);
        });

    }
});