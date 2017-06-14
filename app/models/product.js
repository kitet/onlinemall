import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  image: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  timestamp: DS.attr('number'),
  quantity: DS.attr('number'),
  category: DS.attr('string'),
  tag: DS.attr('string')
});
