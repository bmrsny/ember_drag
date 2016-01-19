import Ember from 'ember';

export default Ember.Route.extend({
  model : function() {
      return this.store.find('file');
    },

    actions : {
      removeFile: function(file_id){
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
