import Ember from 'ember';

export default Ember.Component.extend({
  dragOver: function(e) {
    e.preventDefault();
  },

  drop: function(e){
    var id = e.dataTransfer.getData('text/data');
    this.sendAction('removeFile', id);
    // var record = this.get('file').findBy('id');
    // record.set("inFolder", false).save().then(() => {
      // console.log('save successful');
      // this.refresh();
    // }, function() {
      // console.log('save failed')
    // });
  }
});
