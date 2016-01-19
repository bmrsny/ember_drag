import DS from 'ember-data';

var File =  DS.Model.extend({
  name: DS.attr('string'),
  inFolder: DS.attr('boolean', {defaultValue: true}),
  // inFolder: DS.attr('boolean'),
});

File.reopenClass({
  FIXTURES : [
    {id: 1, name: "File1", inFolder: true},
    {id: 2, name: "File2", inFolder: true},
    {id: 3, name: "File3", inFolder: true}
  ]
});

export default File;