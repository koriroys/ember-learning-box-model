import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('box-model', {
      margin_top: 10,
      margin_right: 10,
      margin_bottom: 10,
      margin_left: 10,
      content_height: 10,
      content_width: 10
    });
  }
});
