import DS from 'ember-data';

var File =  DS.Model.extend({
  name: DS.attr('string'),
  inFolder: DS.attr('boolean', {defaultValue: true}),
});

File.reopenClass({
  FIXTURES : [
    {id: 1, name: "File1"},
    {id: 2, name: "File2"},
    {id: 3, name: "File3"}
  ]
});

export default File;