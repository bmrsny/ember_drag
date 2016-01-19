import Ember from 'ember';

export default Ember.Component.extend({
  dragOver: function(e) {
    e.preventDefault();
  },

  drop: function(e){
    // var file = this.get('file');
    var id = e.dataTransfer.getData('text/data');
    var record = this.get('file').findProperty('id');
    // var record = this.store.find('file', 'id');
    console.log(record);
    // this.get('inTrash').pushObject(record);
    record.set("inFolder", false)
    // this.get('inFolder').removeObject(record);

  }
});
