import Vue from 'vue'
import ListComponent from './components/ListComponent.vue';
import SearchComponent from './components/SearchComponent.vue'; //!!!

let app = new Vue({
    el: '.container',
    components: {
        'list-component': ListComponent,
		'search-component': SearchComponent, //!!!
    },
});
