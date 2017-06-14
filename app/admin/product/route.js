import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		cancelProduct(){
			this.transitionTo('index');
		},
		saveNewProduct(productobj){
			//alert('action up done');	
			var newproduct=this.store.createRecord('product',productobj);
			newproduct.save();	
			// newproduct.save().then(function(){
			// 	console.log('product saved successfully');
			// 	this.transitionTo('admin/product');
			// }).catch(function(){
			// 	console.log('product failed to save');
			// });
		}
	}
});
