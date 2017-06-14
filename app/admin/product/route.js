import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		cancelProduct(){
			this.transitionTo('index');
		},
		saveNewProduct(){
			alert('action up done');		
		}
	}
});
