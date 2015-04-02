import Ember from 'ember';

export default Ember.TextField.extend({
  type: "range",

  init: function() {
    this.set('value', this.get('numericValue'));
    this._super();
  },
  updateNumeric: function() {
    this.set('numericValue', Number(this.get('value')));
  }.observes('value'),
  updateValue: function() {
    var val= Number(this.get('numericValue'));
    this.set('value', Number.isNaN(val)?null:val);
  }.observes('numericValue')
});
