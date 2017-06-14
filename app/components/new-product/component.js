import Ember from 'ember';

export default Ember.Component.extend({
	showalert:false,
	showNewProductForm: false,
	actions:{
		showNewProductForm(){
			this.set('showNewProductForm', true);
			this.set('showalert', false);
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
			this.set('title','');
			this.set('description','');
			this.set('price','');
			this.set('tag','');
			this.set('location','');
			this.set('category','');
			this.set('image','');
			this.set('quantity','');
			this.sendAction('saveNewProduct', productobj);	
			this.set('showalert', true);
			this.set('showNewProductForm', false);
		}
	}
});
