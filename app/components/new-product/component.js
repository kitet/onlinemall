import Ember from 'ember';

export default Ember.Component.extend({
	showNewProductForm: false,
	actions:{
		showNewProductForm(){
			this.set('showNewProductForm', true);
		},
		cancelProduct(){
			//this.transitionTo('index');
			this.sendAction('cancelProduct');
		},
		saveNewProduct(){
			var productobj={
				title: this.get('title'),
				description: this.get('description'),
				category: this.get('category'),
				price: this.get('price'),
				tag: this.get('tag'),
				image: this.get('image'),
				location: this.get('location'),
				quantity: this.get('quantity'),
				timestamp: new Date().getTime()
			}
			this.sendAction('saveNewProduct', productobj);	
		}
	}
});
