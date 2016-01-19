import Ember from 'ember';

export default Ember.Component.extend({
  dragOver: function(e) {
    e.preventDefault();
  },

  drop: function(e){
    var id = e.dataTransfer.getData('text/data');
    this.sendAction('removeFile', id);
  }
});
