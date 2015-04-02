import DS from 'ember-data';

export default DS.Model.extend({
  margin_top: DS.attr('number'),
  margin_right: DS.attr('number'),
  margin_bottom: DS.attr('number'),
  margin_left: DS.attr('number'),

  content_height: DS.attr('number'),
  content_width: DS.attr('number'),

  total_height: function() {
    return this.get('margin_height');
  }.property('margin_height'),

  total_width: function() {
    return this.get('margin_width');
  }.property('margin_width'),

  margin_height: function() {
    var height = this.get('content_height') + this.get('margin_top') + this.get('margin_bottom');
    return height;
  }.property('content_height', 'margin_top', 'margin_bottom'),

  margin_width: function() {
    return this.get('content_width') + this.get('margin_left') + this.get('margin_right');
  }.property('content_width', 'margin_left', 'margin_right')
});
