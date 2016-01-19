import Ember from 'ember';

export default Ember.Route.extend({
  model : function() {
      return this.store.find('file');
    },

    actions : {
      removeFile: function(file_id){
        // var file = this.store.query('file', file_id);
        // var file =  this.store.query('file', file_id);
        // file.inFolder = false;
        // file.save();


       this.store.findRecord('file', file_id).then((file) => {
        console.log(file);
        console.log(file.id);
        file.set('inFolder', false);
        file.save();
        console.log('save successful');
        });
      }
    }
});
