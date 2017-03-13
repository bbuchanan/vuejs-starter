/*function greeter(person) {
	return "Hello " + person;
}

var user = "John User";

document.body.innerHTML = greeter(user);*/

//declare var require: any

//import Vue = require('vue')
//var App = require('./app.vue')
import Vue from 'vue';
import App from './App';

new Vue({
	el: '#app',
	components: { App },
	render: h => h('app')
})