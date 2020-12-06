import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
// Problem no load this module this path was errate
import App from '../imports/ui/App.vue';
 
Meteor.startup(() => {
  new Vue({el: '#app', ... App,});
});
