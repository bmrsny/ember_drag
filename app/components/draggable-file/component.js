import Ember from 'ember';

export default Ember.Component.extend({
  isInFolder: true,
  
  dragStart: function(e) {
    e.dataTransfer.setData('text/data', this.get('file.id'));
  }
});
